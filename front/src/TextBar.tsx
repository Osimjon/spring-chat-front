import React, { ChangeEvent, useState } from "react";
import { Button, Container, Input, useTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useMutation, useQueryClient } from "react-query";

type TextBarProps = {
    userName: string;
};

export function TextBar({ userName }: TextBarProps) {
    const theme = useTheme();
    const [message, setMessage] = useState("");
    const queryClient = useQueryClient();

    const sendMessageMutation = useMutation(
        async (data: { message: string; userName: string }) => {
            return await fetch("http://localhost:8080/chat/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
        },
        {
            onSuccess: async () => {
                //
            },
            onError: () => {
                //
            }
        }
    )

    const handleSendMessage = () => {
        if (userName && message) {
            sendMessageMutation.mutate({ message, userName });
            setMessage("");
        }
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);
    }

    return <div>
        <Container maxWidth="xl">
            <Input style={{ width: "50%", height: "40px" }} onChange={handleInput} value={message} autoFocus />
            <Button variant="contained" onClick={handleSendMessage}>
                <SendIcon />
            </Button>
        </Container>
    </div>
}
