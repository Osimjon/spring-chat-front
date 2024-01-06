import {AppBar, Container, Input, Toolbar, Typography, useTheme} from "@mui/material";
import React, {ChangeEvent} from "react";
import ChatIcon from "@mui/icons-material/Chat";

type UserNameInputProps = {
    onUserNameChange: (newUserName: string) => void;
};

export function NavBar({ onUserNameChange }: UserNameInputProps){
    const theme = useTheme();

    const handleInput=(e: ChangeEvent<HTMLInputElement>)=>{
        const newUserName = e.target.value;
        onUserNameChange(newUserName);
    }


    return <>
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters color="secondary">
                    <ChatIcon  sx={{color: theme.palette.primary.light, pr: 2,pt:1}} fontSize={"large"}/>
                    <h1>|</h1>
                    <Typography
                        sx={{
                            color:theme.palette.primary.light,
                            pl: 2,
                            mr: 2,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 70,
                            fontSize:23
                        }}
                    >
                        CHAT
                    </Typography>
                    <Container maxWidth="xl">
                        <a>Your name:</a>
                        <Input style={{width: "50%", height: "40px"}} onChange={handleInput} autoFocus/>
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}