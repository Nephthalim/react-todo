import React from 'react'
import './TodoMenu.css'

const TodoMenu = ({showModalHandler, deleteTodo}) => {
    
    return (
        <div className="popup">
            <a onClick={showModalHandler}>Edit</a>
            <a onClick={deleteTodo}>Delete</a>
        </div>
    )
}

export default TodoMenu
