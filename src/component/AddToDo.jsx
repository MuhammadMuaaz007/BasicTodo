import { useState } from "react";
import { TiFolderAdd } from "react-icons/ti";
import { useContext } from "react";
import { TodoItemsContext } from "../../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Your To Do Here"
            className="form-control"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={() => handleAddButtonClicked(todoName, dueDate)}
          >
            <TiFolderAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
