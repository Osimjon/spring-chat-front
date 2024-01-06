import { useQuery } from "react-query";
import { List, ListItem, Paper } from "@mui/material/";
import { Avatar, Box, Button, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ArrowDownwardRounded } from "@mui/icons-material";
import { useRef } from "react";
import './MessageList.css';

type messageType = {
    id: string,
    message: string,
    userName: string,
    messageTime: string,
};

export function MessageList() {
    const fetchMessages = async () => {
        const res = await fetch("http://localhost:8080/chat/messages");
        return res.json();
    };

    const { data: messages, isLoading } = useQuery({
        queryFn: async () => {
            return fetchMessages();
        },
        refetchInterval: 2000,
        queryKey: ["data"],
    });

    const listRef = useRef<HTMLUListElement | null>(null);

    const scrollDown = () => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <Container sx={{ width: '65%' }}>
                <List
                    ref={listRef}
                    className="smooth-scroll-list"
                    sx={{
                        m: 3,
                        position: 'relative',
                        overflow: 'auto',
                        width: '80%',
                        maxHeight: '70vh',
                    }}
                >
                    {messages?.map((message: messageType) => (
                        <ListItem key={message.id}>
                            <Paper
                                elevation={1}
                                sx={{ p: 1, paddingLeft: 2, display: 'inline-flex', paddingRight: 3 }}
                            >
                                <Avatar
                                    sx={{
                                        maxHeight: 27,
                                        maxWidth: 27,
                                        bgcolor: lightBlue[400],
                                    }}
                                >
                                    {message.userName[0]}
                                </Avatar>
                                <Box sx={{ marginLeft: 2 }}>
                                    {message.userName}
                                    <br />
                                    {message.message}
                                </Box>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
                <Button onClick={scrollDown}>
                    <ArrowDownwardRounded color={'action'} />
                </Button>
            </Container>
        </div>
    );
}

