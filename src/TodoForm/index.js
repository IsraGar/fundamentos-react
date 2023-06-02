import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm(){

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form className="form" onSubmit={onSubmit}>
            <span className="title">Vamos a crear un TODO</span>
            <div>
                <textarea
                required
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu nuevo TODO" />                
            </div>
            <div className="buttons">
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar</button>
                <button>
                    Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };