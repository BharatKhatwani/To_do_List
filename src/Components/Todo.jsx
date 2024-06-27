import React, { useEffect, useRef, useState } from 'react';
import todoicon from '../assets/todo_icon.png';
import TodoItem from './TodoItem.jsx';

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      complete: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* -----title----- */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todoicon} alt="Todo Icon" />
        <h1 className='text-3xl font-semibold font-serif'>To do List</h1>
      </div>

      {/* ----- Input-Box ----- */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          ref={inputRef}
          type='text'
          placeholder='Add your task'
        />
        <button
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
          onClick={add}
        >
          Add +
        </button>
      </div>

      {/* ----- Todo-List ----- */}
      <div>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            complete={item.complete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
