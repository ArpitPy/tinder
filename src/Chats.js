import React from 'react'
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Amanda Cerny"
            message="Hey what's up?"
            timestamp="1 min ago"
            profilePic="https://1.bp.blogspot.com/-My3_aqoa2EQ/YUs8axEqMoI/AAAAAAAAAMI/i_KMLPoswxkpM1Q4p9jfi2Xc9W9L3kJtwCLcBGAsYHQ/s16000/ama.jpg"
            />
            <Chat 
            name="Emma Watson"
            message="Hahaha"
            timestamp="35 mins ago"
            profilePic="https://1.bp.blogspot.com/-kY-WC3alAI4/YUwRq0hsg8I/AAAAAAAAAMo/g1FipBeF3H0aAyfcE-_C91mi9O1SYgcMACLcBGAsYHQ/s16000/em.jpg"
            />
            <Chat 
            name="Kylie Jenner"
            message="Are you free tomorrow?"
            timestamp="2 hrs ago"
            profilePic="https://1.bp.blogspot.com/-Jr78rkNPZew/YUwRLeiAScI/AAAAAAAAAMY/OHMprxt8Q802jp6z6gSVIdNLTiV_b0YXgCLcBGAsYHQ/s16000/kylie-jenner-Samuel-Rauda-instagram-stories-gofundme-Sam-Rauda-norge-insta-kuwtk-sesong-20-732x639.jpg"
            />
            <Chat 
            name="Neha Sharma"
            message="Yeah that's my cat <3"
            timestamp="Yesterday"
            profilePic="https://1.bp.blogspot.com/-HEGSgWPONBk/YUwRLc3mJ1I/AAAAAAAAAMc/ffwyD8AXG7suF5S0RjodumOebbj5rZGPACLcBGAsYHQ/s16000/ne.jpg"
            />
        </div>
    )
}

export default Chats
