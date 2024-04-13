import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
    const { list } = useContext(TodoContext);
    const {dispatch} = useContext(TodoDispatchContext);


    function onFinished(todo , isFinished){
        dispatch({type: 'finish_todo' , payload: {todo, isFinished: isFinished}})

        // const updatedList = list.map(t => {
        //     if (t.id === todo.id) { // Fixed comparison operator
        //        todo.finished = isFinished;
        //         // return { ...t, finished: isFinished }; // Update 'finished' property immutably
        //     }
        //     return t;
        // });
        // setList(updatedList);
    }

    function onDelete(todo) {
        dispatch({type: 'delete_todo' , payload: {todo}})

        // const updatedList=list.filter(t => t.id!= todo.id)
        // setList(updatedList);
    }

    function onEdit(todo, todoText) {
        dispatch({type: "edit_todo" , payload: {todo, todoText}})

        // const updatedList=list.map(t => {
        //     if(t.id == todo.id){
        //         todo.todoData =todoText;
        //     }
        //     return t;
        // });
        // setList(updatedList);
    }
    

    return (
        <div>
            {list.length > 0 &&
                list.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        isFinished={todo.finished}
                        todoData={todo.todoData}
                        changeFinished={(isFinished) => onFinished(todo,isFinished)}
                        onDelete={() => onDelete(todo)}
                        onEdit={(todotext) => onEdit(todo, todotext)}

                        // changeFinished={(isFinished) => {
                            // console.log("isFinished", isFinished);
                            // const updatedList = list.map(t => {
                            //     if (t.id === todo.id) { // Fixed comparison operator
                            //        todo.finished = isFinished;
                            //         // return { ...t, finished: isFinished }; // Update 'finished' property immutably
                            //     }
                            //     return t;
                            // });
                            // setList(updatedList);
                        // }}
                        // onDelete={() => {
                        //     const updatedList=list.filter(t => t.id!= todo.id)
                        //     setList(updatedList);
                        // }}
                        // onEdit ={(todotText) => {
                        // const updatedList=list.map(t => {
                        //     if(t.id == todo.id){
                        //         todo.todoData =todotText;
                        //     }
                        //     return t;
                        // });
                        // setList(updatedList);
                        // }}
                        
                    />
                ))}
        </div>
    );
}

export default TodoList;
