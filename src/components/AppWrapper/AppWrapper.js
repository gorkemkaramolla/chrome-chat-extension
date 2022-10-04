import { React } from "react";
import { useTheme } from "../Contexts/ThemeContext";
import "./AppWrapper.scss";
import Todos from "../Todos/Todos";
const AppWrapper = () => {
    const { colorTheme } = useTheme();
    return <Todos></Todos>;
};

export default AppWrapper;
