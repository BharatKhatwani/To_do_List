import React from 'react';
import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';
import not_tick from '../assets/not_tick.png';

const TodoItem = ({ text, id, complete, deleteTodo, toggle }) => {
  return (
    <div onClick={() => { toggle(id); }} className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={complete ? tick : not_tick} alt='' className='w-7' />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${complete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={() => { deleteTodo(id); }} src={delete_icon} alt='' className='w-3.5 cursor-pointer text-slate-700' />
    </div>
  );
}

export default TodoItem;
