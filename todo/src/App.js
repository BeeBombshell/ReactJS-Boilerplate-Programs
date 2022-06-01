import TodoList from "./components/TodoList/TodoList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TodoList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
