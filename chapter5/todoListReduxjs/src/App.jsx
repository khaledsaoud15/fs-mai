import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/todoSlice";
import { DeleteOutlined } from "@ant-design/icons";

const App = () => {
  const todoArr = useSelector(({ todo }) => todo.arr);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const addTodoList = () => {
    if (inputRef.current.value === "") {
      return;
    }
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <section className="flex flex-col gap-3 pos w-2/4 h-[70vh] shadow-2xl shadow-gray-400 rounded-lg overflow-hidden">
      <div className="w-full flex items-center justify-between h-fit bg-gray-200">
        <input
          ref={inputRef}
          type="text"
          className="w-3/4 h-full py-3 px-8 bg-transparent outline-none"
        />
        <button
          onClick={addTodoList}
          className="bg-yellow-500 text-white w-1/4 py-3 px-4"
        >
          ADD TODO
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full h-[70vh] px-4 overflow-y-auto">
        {todoArr.map((t, i) => (
          <div
            key={i}
            className="w-full min-h-[10vh] h-[10vh] bg-gray-100 rounded-lg flex items-center justify-between px-8"
          >
            <h1 className="text-xl font-semibold">{t}</h1>
            <img
              src="./trash.svg"
              alt=""
              className="w-8 h-8 object-cover cursor-pointer animate-bounce"
              onClick={() => dispatch(deleteTodo(i))}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
