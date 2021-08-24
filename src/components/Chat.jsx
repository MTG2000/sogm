import React from 'react';

import Menu from './Menu'
import TopBar from './TopBar'

let chats = [
    {
        name: "Peter Johnson",
        picture: "https://specscart.co.uk/media/wysiwyg/blogimages/try-at-home-right-blog.jpg",
        alt: "Man with multiple glasses",
        state: "Offline",
        message: `Analysis of foreign experience`,
    },
    {
        name: "Tina Durman",
        picture: "https://www.academicrelated.com/wp-content/uploads/2019/07/shutterstock-606759122-e1593580364160.png",
        alt: "Smiling girl",
        state: "Offline",
        message: "It seems logical the strategy we are providing",
    },
    {
        name: "Fred Williams",
        picture: "https://cutewallpaper.org/21/shadow-boy-sunset-wallpapers/Pin-by-HotShot-Sports-on-Dpz-Profile-pictures-instagram-.jpg",
        alt: "Man smiling",
        state: "Online",
        message: "I remember everything mate. See you later!",
    },
]

const Chat = () => {
    return (  
        <div className="dashboard-container">
            <Menu />
            <TopBar />
            <main className="chat">
                <div className="chat__lateral">
                    <form action="" className="chat__form">
                        <label htmlFor="chat-search" className="sr-only"></label>
                        <input type="search" name="chat-search" className="chat__form-input" id="" placeholder="🔎 Search for user..."/>
                    </form>
                    {/* <p className="chat__small-text">Sort by: </p>
                    <button className="chat__option">Latest First</button> */}
                    <div className="chat__add"></div>
                    <div className="chat__card-wrapper">
                        {
                            chats.map((chat, key) => (
                                <div className="chat__card" key={key}>
                                    <h4 className="chat__card-name">{chat.name}</h4>
                                    <span className="chat__card-state">{chat.state}</span>
                                    <img src={chat.picture} alt={chat.alt} className="chat__card-image" />
                                    <span className="chat__card-time">{chat.time}</span>
                                    <p className="chat__card-message">{chat.message}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="chat__principal">
                    <div className="chat__principal-user">
                        <img src="https://cutewallpaper.org/21/shadow-boy-sunset-wallpapers/Pin-by-HotShot-Sports-on-Dpz-Profile-pictures-instagram-.jpg" alt="Person in the shadows" className="chat__principal-picture"/>
                        <div className="chat__principal-user-wra">
                            <h4 className="chat__principal-user-name">Fred Williams</h4>
                            <span className="chat__principal-user-info">Offline • Last seen 3 hours ago</span>
                        </div>
                    </div>
                    <label htmlFor="textarea" className="sr-only">Type a message here...</label>
                    <div className="chat__principal-icons">
                        <div className="chat__principal-icons-clip"></div>
                        <div className="chat__principal-icons-smile"></div>
                        <div className="chat__principal-icons-microphone"></div>
                        <div className="chat__principal-icons-telegram"></div>
                    </div>
                    <textarea name="textarea" className="chat__principal-textarea" placeholder="Type a message here...">
                        
                    </textarea>
                </div>
            </main>
        </div>
    );
}
 
export default Chat;