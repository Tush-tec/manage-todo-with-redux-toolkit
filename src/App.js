import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="container mx-auto p-6">
        <div className=" bg-gray-500 m-20 p-20 rounded-lg shadow-md">
          <AddTodo />       
          <Todo />
        </div>
      </div>
  );
}

export default App;
