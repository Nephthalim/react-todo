import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({ todos, deleteTodo }) => {

    return (
        <>
            <div className="grid">
                {todos.map((element) => {
                    return (
                        <Todo key={element.id} task={element} deleteTodo={deleteTodo} />
                    )
                })}

            </div>
        </>
    )
}

export default TodoList
