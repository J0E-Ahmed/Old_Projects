import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosCOntextProvider from "./store/todos-Context";

function App() {
  return (
    <TodosCOntextProvider>
      <NewTodo />
      <Todos />
    </TodosCOntextProvider>
  );
}

export default App;
