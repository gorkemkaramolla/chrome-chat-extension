import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const currentMode = localStorage.getItem("theme");
    const [colorTheme, setColorTheme] = useState(currentMode);
    return (
        <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;
