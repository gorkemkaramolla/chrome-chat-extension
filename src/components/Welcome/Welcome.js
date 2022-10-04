import React from "react";
import "./Welcome.scss";

import ChatBox from "../Chat-Box/ChatBox";
const Welcome = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div>
                        <ChatBox></ChatBox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
