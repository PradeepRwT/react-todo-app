import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";
import { useContext } from "react";

const Read = () => {

  const [todos, settodos] = useContext(todoContext)

  const deleteHandler = (id) => {
    const filtertodos = todos.filter((todo) => todo.id != id);
    settodos(filtertodos);
    toast.success("Todo deleted!");
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        className="bg-gray-950 text-white text-sm relative h-10 mb-3 mt-3 rounded p-2"
        key={todo.id}
      >
        {todo.title}
        <button
          className="text-sm text-orange-700 absolute top-2 right-2"
          onClick={() => {
            deleteHandler(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="flex gap-10 justify-between">
        <h1 className="text-4xl text-white">
          <span className="text-pink-600">Pending</span> Todos
        </h1>
        <button
          className="text-white text-[10px] border-white border-2 w-25 rounded active:scale-95 hover:scale-105 hover:cursor-pointer transition duration-300 read-only:"
          onClick={() => {
            if (todos.length === 0) {
              toast.error("No todos to delete!");
              return;
            }

            settodos([]);
            toast.success("All todos deleted!");
          }}
        >
          Delete All Tasks
        </button>
      </div>
      <ol className="list-decimal">{rendertodos}</ol>
    </div>
  );
};

export default Read;
