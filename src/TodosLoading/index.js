import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return (
        <div className="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export { TodosLoading };