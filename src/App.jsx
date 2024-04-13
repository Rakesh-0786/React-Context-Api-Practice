import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './context/TodoContext';
import { useReducer } from 'react';
import TodoDispatchContext from './context/TodoDispatchContext';
import todoReducer from './reducers/todoReducer';
function App(){
//   const[list, setList] =useState([
//     {id: 1, todoData:"todo 1", finished:false},
//     {id: 2, todoData:"todo 2", finished:true},
// ]);

// here we use the useReducer hooks
const [list, dispatch]= useReducer(todoReducer, []); 
// after that we call the dispatch method  
return(
  <TodoContext.Provider value={{list}}>
  <TodoDispatchContext.Provider value={{dispatch}}>
    <AddTodo />
    <TodoList />
    </TodoDispatchContext.Provider>
  </TodoContext.Provider>
)
}


// {/* <AddTodo updateList={(todo) => {
//     dispatch({type:'add_todo' , payload: {todoText : todo}})
//     }} /> */}

// we don't need this we only need to call the dispatch method.
//   return(
//     <TodoContext.Provider value={{list,setList}}>
//       <AddTodo updateList={(todo) => setList([
//         ...list, { id: list.length +1, todoData: todo, finished:false}
//         ])} />
//       <TodoList />
//     </TodoContext.Provider>
//   );
// }
export default App;