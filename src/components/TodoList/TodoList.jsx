import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
function TodoList({editTodo,deleteTodo, todoFinished}) {

    const list =useSelector((state) => state.todo);


    function onFinished(todo , isFinished){
       todoFinished(todo, isFinished);
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
       deleteTodo(todo);
        // const updatedList=list.filter(t => t.id!= todo.id)
        // setList(updatedList);
    }

    function onEdit(todo, todoText) {
       editTodo(todo, todoText);
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
