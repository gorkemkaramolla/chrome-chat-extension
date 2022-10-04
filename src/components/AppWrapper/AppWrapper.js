import { React } from "react";
import { useTheme } from "../Contexts/ThemeContext";
import Welcome from "../Welcome/Welcome";
const AppWrapper = () => {
    const { colorTheme } = useTheme();
    return (
        <>
            <div className={`container ${colorTheme}`}>
                <Welcome></Welcome>
            </div>
        </>
    );
};

export default AppWrapper;
