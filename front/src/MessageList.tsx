import React from "react";
import {useQuery} from "react-query";
import {List, ListItem, Paper} from "@mui/material/";
import {Avatar, Box, Container} from "@mui/material";
import {lightBlue} from "@mui/material/colors";

type messageType = {
    id: string,
    message: string,
    userName: string
    messageTime: string
}

export function MessageList() {
    const fetchMessages = async () => {
        const res = await fetch("http://localhost:8080/chat/messages");
        return res.json();
    }

    const {data: messages, isLoading} = useQuery({
        queryFn: async () => {
            return fetchMessages();

        },
        queryKey: ["data"]
    })
    if (isLoading) return (
        <div>Loading...</div>
    )

    return (

        <div>
            <Container>
                <List sx={{m: 3}}>
                    {messages?.map((message: messageType) => (
                        <ListItem key={message.id}>
                            <Paper elevation={1} sx={{p: 1,paddingLeft:2 , display: 'inline-flex', paddingRight: 3}}>
                                <Avatar sx={{bgcolor: lightBlue [400], maxHeight: 27, maxWidth:27 }}>{message.userName[0]}</Avatar>
                                <Box sx={{marginLeft: 2}}>
                                    {message.userName}
                                    <br/>
                                    {message.message}
                                </Box>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </div>
    )

}
