import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import "./ChatBox.scss";
const ChatBox = () => {
    const { colorTheme, setColorTheme } = useContext(ThemeContext);
    useEffect(() => {
        localStorage.setItem("theme", colorTheme);
    }, [colorTheme]);
    return (
        <div className="wrapper">
            <div className="align-self-center">Header</div>
            <div className="chat-area">asdaasdsd</div>
            <form action="" className="message-form">
                <div className="form-holder">
                    <input type="text" className="message-input" />
                    <input className="submit" type="submit" />
                </div>
            </form>
            <div className="footer">
                <p>Mode: {colorTheme}</p>
                <p
                    onClick={() => {
                        colorTheme === "dark"
                            ? setColorTheme("light")
                            : setColorTheme("dark");
                    }}
                >
                    change color
                </p>
            </div>
        </div>
    );
};

export default ChatBox;
