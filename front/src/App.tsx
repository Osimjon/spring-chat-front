import './App.css';
import {MessageList} from "./MessageList";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {NavBar} from "./NavBar";
import {TextBar} from "./TextBar";
import {createTheme, ThemeProvider} from "@mui/material";


const queryClient = new QueryClient();

const theme = createTheme({
    palette:{
        primary:{
            main: '#f87060',
            dark:'#102542',
            light:'#ffffff'
        },
        secondary:{
            light:'#cdd7d6',
            main:'#b3a394'
        },


    }
})
function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
              <div className="App">
                  <NavBar/>
                  <MessageList/>
                  <TextBar/>
              </div>
          </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;
