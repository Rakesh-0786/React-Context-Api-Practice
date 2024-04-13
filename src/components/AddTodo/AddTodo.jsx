import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo() {
    const [inputText, setInputText] = useState("");
    const { dispatch } = useContext(TodoDispatchContext);

    const addTodo = () => {
        if (inputText.trim() !== "") {
            dispatch({ type: 'add_todo', payload: { todoText: inputText } });
            setInputText('');
        }
    };

    return (
        <div>
            <input 
                type="text"
                value={inputText}
                placeholder="Add your next todo..." 
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default AddTodo;
