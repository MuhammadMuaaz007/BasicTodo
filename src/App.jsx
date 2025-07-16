import AddToDo from "./component/AddToDo";
import AppName from "./component/AppName";
import ToDoItems from "./component/ToDoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContextProvider from "../store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <WelcomeMessage />
        <ToDoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
