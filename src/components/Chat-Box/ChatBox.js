import React from "react";
import "./ChatBox.scss";
const ChatBox = () => {
    return (
        <div className="wrapper">
            <div className="align-self-center">Header</div>
            <div className="chat-area"></div>
            <form action="" className="message-form">
                <div className="form-holder">
                    <input type="text" className="message-input" />
                    <input className="submit" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ChatBox;
