import {AppBar, Container, Toolbar, Typography, useTheme} from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";

export function NavBar(){
    const theme = useTheme();

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
                </Toolbar>
            </Container>
        </AppBar>
    </>
}