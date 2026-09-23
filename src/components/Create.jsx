import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";


const Create = () => {
  // const[title,setTitle] = useState("")
  // const [completed, setcompleted] = useState(false)

  const [todos, settodos] = useContext(todoContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const clickHandler = (data) => {
    // e.preventDefault();

    // if (!title.trim()) {
    //   return;
    // }

    const addTodos = {
      id: nanoid(),
      title: data.title,
      completed: false,
    };

    settodos([...todos, addTodos]);

    toast.success("Todo created successfully!");

    reset();
  };

  const onError = (errors) => {
    toast.error(errors.title?.message);
  };

  return (
    <>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(clickHandler,onError)}
      >
        <h1 className="text-4xl text-white">
          Set <span className="text-red-400">Reminders</span> for Tasks
        </h1>
        <input
          className="text-white outline-none"
          {...register("title", {
            required: "enter your tasks first",
            minLength: { value: 5, message: "at least 5 character" },
          })}
          type="text"
          placeholder="Enter your Tasks"
        />
        <hr className="text-white -mt-3.75" />
        <button className="text-white px-3 py-1 border-white border-2 w-40 rounded active:scale-95 hover:scale-105 hover:cursor-pointer transition duration-300">
          Create Todo
        </button>
      </form>
    </>
  );
};

export default Create;
