import './App.css';
import {MessageList} from "./MessageList";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {NavBar} from "./NavBar";


const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <div className="App">
              <NavBar/>
              <MessageList/>
          </div>
      </QueryClientProvider>
  );
}

export default App;
