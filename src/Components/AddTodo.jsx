import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Feautres/Todo/todoSlice';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <form
        onSubmit={addTodoHandler}
        className="flex items-center gap-3 bg-[#edede9] p-4 rounded-lg shadow-lg"
      >
        <input
          type="text"
          className="w-72 bg-white text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f5ebe0] px-4 py-2"
          placeholder="Enter a Todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#005f73] hover:bg-[#0a9396] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
