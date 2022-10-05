import ThemeProvider from "./components/Contexts/ThemeContext";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Todos from "./components/Todos/Todos";
import { TodoContextProvider } from "./components/Contexts/TodoContext";
function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <TodoContextProvider>
                    <AppWrapper></AppWrapper>
                </TodoContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
