import { React, useContext } from "react";
import Welcome from "../Welcome/Welcome";
import { ThemeContext } from "../Contexts/ThemeContext";
const AppWrapper = () => {
    const { colorTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`container ${colorTheme}`}>
                <Welcome></Welcome>
            </div>
        </>
    );
};

export default AppWrapper;
