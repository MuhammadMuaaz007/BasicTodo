import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "newItem") {
    newTodoItems = [
      ...currTodoItems,
      { Name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "deleteItem") {
    newTodoItems = currTodoItems.filter(
      (item) => item.Name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  // const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "newItem",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "deleteItem",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem, // we can also write it as deleteItem: deleteItem, when key and value both are same we can write them as deleteItem, in js;
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
