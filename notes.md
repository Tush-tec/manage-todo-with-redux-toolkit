# Push method in reducer :

```js
addTodo(state, action) {
  state.todo.push({
    id: nanoid(),
    text: action.payload,
    completed: false,
  });
}


```

> In the addTodo reducer, we use state.todo.push() to mutate the state directly by adding a new todo item to the existing todo array. This is because Redux Toolkit uses Immer.js under the hood, which allows us to mutate the state directly in a safe way, without breaking Redux's rules of immutability.1

> pushing a new todo object into the todo array, which modifies the array in place. Thanks to Immer.js, Redux Toolkit allows this without having to manually clone the state or array. The change will still result in an immutable update for Redux.

> pushing a new todo object into the todo array, which modifies the array in place. Thanks to Immer.js, Redux Toolkit allows this without having to manually clone the state or array. The change will still result in an immutable update for Redux.

> Without Redux Toolkit, you’d need to ensure that you create new copies of the state when making updates, which is more cumbersome.

- what if we cannot use push method?

```js
  then we use tradittionally way of creating a new array with the new todo item and return it. like this:

  addTodo(state, action) {
  return {
    ...state, // Spread the existing state
    todo: [...state.todo, { // Create a new array with the new todo
      id: nanoid(),
      text: action.payload,
      completed: false
    }]
  };
}

```

- what happen here is :

> 1. ...state (Spread operator)

    The spread operator ...state is used to copy the existing state into the new state object. This is a deep copy, meaning it copies all the properties of the state into a new object. It ensures that we do not modify the original state directly, maintaining the immutability principle in Redux

> 2.  . todo: [...state.todo, { ... }] (Creating a new array)
>     The code creates a new array by using the spread operator (...state.todo) to copy the current todo array and then adding a new todo object to it.
>     This ensures that we are not mutating the original state.todo array but rather creating a new array with the existing todos and the new todo item at the end.

> 3. { id: nanoid(), text: action.payload, completed: false } (The new todo item)
>    This part creates a new todo object with the following properties:
>    id: nanoid() – nanoid() is a library that generates a unique, random ID for the new todo item.
>    text: action.payload – The text of the new todo comes from the action.payload, which is passed when dispatching the action.
>    completed: false – The new todo is initially marked as not completed (false).

4. Returning the updated state
   The new state is returned with the updated todo array that includes the newly added todo item.
   This returned object is then used as the new state in the Redux store.


// useDispatch usage :- >

    // main functionality of disptach is, they change value in state using/via reducer.
    // so here we are using useDispatch to change value in state
    // we are using dispatch to call action creator function
    // action creator function is a function that return an action object
    // action object is an object that have type and payload
    // type is a string that describe what action is happening
    // payload is a value that is being passed with the action
    // so here we are passing payload as a todo item

    /*Returns the dispatch function from the Redux store.
       @returns — The dispatch function from the Redux store.
       @template AppDispatch — The specific type of the dispatch function.
    */