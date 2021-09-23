import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput]=useState('');
    const [messages, setMessages]=useState([
        {
            name: 'Amanda Cerny',
            image: 'https://1.bp.blogspot.com/-My3_aqoa2EQ/YUs8axEqMoI/AAAAAAAAAMI/i_KMLPoswxkpM1Q4p9jfi2Xc9W9L3kJtwCLcBGAsYHQ/s16000/ama.jpg',
            message: "Hey what's up?",
        },
        {
            name: 'Amanda Cerny',
            image: 'https://1.bp.blogspot.com/-My3_aqoa2EQ/YUs8axEqMoI/AAAAAAAAAMI/i_KMLPoswxkpM1Q4p9jfi2Xc9W9L3kJtwCLcBGAsYHQ/s16000/ama.jpg',
            message: "How are you?",
        },
        {
            message: "Hey I am good, wbu?",
        },
    ]);
    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages, {message:input}]);
        setInput('');   
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp"> You matched with Amanda on 15/09/21</p> 
            {messages.map(message=>(
                message.name ? (
                    <div className="chatScreen__message">
                <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                />
                    <p className="chatScreen__text">
                        {message.message}
                    </p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">
                        {message.message}
                    </p></div>
                )
            ))}
    <form className="chatScreen__input">
        <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message..." type="text" />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
    </form>
        </div>
    )
}


export default ChatScreen
