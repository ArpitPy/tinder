import './App.css';
import React from "react";
import Header from "./Header";
import Chats from "./Chats";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() { 
  return (
    <div className="App"> 
      <Router> 
        <Switch>
        <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chat/Amanda Cerny">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
          <Header /> 
              <TinderCards />
              <SwipeButtons />
          </Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
