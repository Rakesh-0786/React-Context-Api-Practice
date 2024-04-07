import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";

function TodoList() {
    const { list, setList } = useContext(TodoContext);

    return (
        <div>
            {list.length > 0 &&
                list.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        isFinished={todo.finished}
                        todoData={todo.todoData}
                        changeFinished={(isFinished) => {
                            console.log("isFinished", isFinished);
                            const updatedList = list.map(t => {
                                if (t.id === todo.id) { // Fixed comparison operator
                                    return { ...t, finished: isFinished }; // Update 'finished' property immutably
                                }
                                return t;
                            });
                            setList(updatedList);
                        }}
                        onDelete={() => {
                            const updatedList=list.filter(t => t.id!= todo.id)
                            setList(updatedList);
                        }}
                        onEdit ={(todotText) => {
                        const updatedList=list.map(t => {
                            if(t.id == todo.id){
                                todo.todoData =todotText;
                            }
                            return t;
                        });
                        setList(updatedList);
                        }}
                        
                    />
                ))}
        </div>
    );
}

export default TodoList;
