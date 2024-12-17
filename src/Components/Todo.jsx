import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "../Feautres/Todo/todoSlice";

const Todo = () => {
  const getTodo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null); 
  const [newText, setNewText] = useState(""); 

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setNewText(todo.text);
  };

  const handleUpdate = (todo) => {
    if (newText.trim() !== "") {
      dispatch(updateTodo({ id: todo.id, text: newText }));
      setEditingId(null); // End the editing mode
      setNewText(""); // Reset the input field
    }
  };

  const handleToggleComplete = (id) =>{
    dispatch(toggleComplete(id))
  }

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-zinc-800 table-auto mx-auto w-[1200px]">
        <thead>
          <tr>
            <th className="text-white px-4 py-2">ID</th>
            <th className="text-white px-4 py-2">Text</th>
            <th className="text-white px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {getTodo.map((todo) => (
            <tr key={todo.id} className="border-t border-gray-700">
              <td className="text-white text-center px-4 py-2">{todo.id}</td>
              <td className="text-white text-center px-4 py-2">
                
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="bg-zinc-700 text-white px-4 py-2 rounded"
                  />
                ) : (
                  <span>{todo.text}</span>
                )}
              </td>
              
              <td className="text-white text-center px-4 py-2 text-center">
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="text-white bg-red-500 py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
                >
                  Delete
                </button>
                &nbsp;&nbsp;
                {editingId === todo.id ? (
                  <button
                    onClick={() => handleUpdate(todo)}
                    className="text-white bg-blue-800 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-white bg-blue-800 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    Update
                  </button>
                )}
                &nbsp;
                &nbsp;
                 <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span className="ml-2">{todo.completed ? 'Completed' : 'Incomplete'}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
