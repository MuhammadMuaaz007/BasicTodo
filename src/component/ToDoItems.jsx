import Styles from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";
import { TodoItemsContext } from "../../store/todo-items-store";
import { useContext } from "react";

function ToDoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={Styles.itemsContainer}>
        {todoItems.map((items) => (
          <ToDoItem
            key={items.Name}
            todoName={items.Name}
            todoDate={items.dueDate}
          />
        ))}
      </div>
    </>
  );
}
export default ToDoItems;
