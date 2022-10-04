import ThemeProvider from "./components/Contexts/ThemeContext";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Todos from "./components/Todos/Todos";
function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <AppWrapper></AppWrapper>
            </ThemeProvider>
        </div>
    );
}

export default App;
