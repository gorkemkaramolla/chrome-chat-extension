import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const useTheme = () => {
    return useContext(ThemeContext);
};

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
