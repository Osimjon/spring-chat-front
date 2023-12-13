import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import React from "react";

export function NavBar(){
    return <>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        sx={{
                            mr: 2,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 70,
                            fontSize:25
                        }}
                    >
                        CHAT
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}