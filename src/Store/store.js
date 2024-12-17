import {configureStore} from '@reduxjs/toolkit'
import CreateTodoSlice from '../Feautres/Todo/todoSlice'


const store = configureStore(
    {
        reducer:{
            todo : CreateTodoSlice
        }
    }
)



export default store;