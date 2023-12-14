import React from "react";
import {Box, Button, Container, Input, useTheme} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export function TextBar(){
    const theme = useTheme();

    return<div>
        <Container maxWidth="xl">
            <Input style={{ width: "50%", height: "40px" }}  />
            <Button variant="contained">
                <SendIcon/>
            </Button>
        </Container>
    </div>
}