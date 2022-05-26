import { useState } from "react";
function Form({addTodo}){
    const[task, setTask] = useState("")

    function addTask(e){
        e.preventDefault()
        addTodo(task)
    }

    return(
        <>
            <form className="form__register">
                <input
                type="text"
                placeholder="Insira uma tarefa"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                className="form__input"
                />
                <button className="form__btn__add" type="submit" onClick={(e)=>addTask(e) }>Enviar</button>
            </form>
        </>
    )
}

export default Form