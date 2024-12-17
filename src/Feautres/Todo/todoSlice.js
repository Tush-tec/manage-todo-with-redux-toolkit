import { createSlice, nanoid } from "@reduxjs/toolkit";

// Nano id for generating unique id


const initialState = {
  todo: [
    {
      id: nanoid(),
      text: "Add your Todos",
      completed: false,
    },
  ],
};


 export const CreateTodoSlice = createSlice(
    {
        name: "todo",
        initialState:  initialState,
        reducers: {
        // Write those functionality which going in the main function
        // in this Section, we gonna define function, which function is made to be.
        // in our project, todo are create, read,update, delete(CRUD)
        // called when the state is changed.

        addTodo: (state,action) => {
            // state is the state of the store
            // action is the action which is been dispatched
            // action is the payload which is been passedin the action'            
            // use push Method for, pushing a new todo object into the todo array, which modifies the array in place. 

            state.todo.push(
                {
                    id:nanoid(),
                    text: action.payload,
                    completed: false,
                    
                }
            )
        },

        updateTodo:(state,action) =>{
            // find the todo object in the state array which id is equal to the id in the action
            const {id, text} = action.payload
            const reWriteTodo = state.todo.find((todo) => todo.id === id)
            // if the todo object is found, then update the todo object
            if(reWriteTodo){
                reWriteTodo.text = text
            }
        },

        // updateTodo: (state, action) => {
        //     const { id, text } = action.payload;
        //     const todo = state.todo.find((todo) => todo.id === id);
        //     if (todo) {
        //       todo.text = text; // Update text
        //     }
        //   },

        deleteTodo: (state,action) =>{
          state.todo = state.todo.filter((todo) => todo.id !== action.payload )
        },

        toggleComplete:(state,action) =>{
            state.todo = state.todo.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                    
                }
                return todo
            })
        }

       }
    }
)

export const selectTodos = (state) => state.todo.todo;  // This will read the 'todo' array from the state

export const {addTodo, updateTodo, deleteTodo,toggleComplete} = CreateTodoSlice.actions

export default CreateTodoSlice.reducer