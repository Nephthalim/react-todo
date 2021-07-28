import React, { useState, useEffect } from 'react'
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import './Todo.css'
import TodoMenu from './TodoMenu';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = ({ key, task, deleteTodo }) => {
    const url = "http://localhost:5000"
    const token = localStorage.getItem('token');
    const [important, switchImportant] = useState(false);
    const [_task, setTask] = useState(false);
    const [active, setActive] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    

    function showEditModalHandler() {
        setShowEditModal(true);
    }


    function closeModalHandler() {
        setShowEditModal(false);
    }


    const markImportant = (id) => {
        const token = localStorage.getItem("token")
        const url = "http://localhost:5000"


        fetch(
            url + "/important/" + id,
            {
                method: 'PUT',
                headers: {
                    'token': token,
                }
            }

        ).then((res) => {
            if (res.status === 200) return res.json();
            else if (res.status === 403) localStorage.removeItem('token')

        }).then(() => {
            switchImportant(!important)

        })
    }

    const rotateCaret = () => {
        setActive(!active)
    }

    const _delete = (e) => {
        e.preventDefault();

        fetch(
            url + "/todo/" + _task.id,
            {
                method: 'DELETE',
                headers: {
                    'token': token,
                }
            }

        ).then((res) => {
            if (res.status === 200) return res.json();
            else if (res.status === 403) localStorage.removeItem('token')

        }).then(() => {
            deleteTodo(_task.id);
        })
    }

    useEffect(() => {
        switchImportant(task.important);
        setTask(task);
    }, [])

    const editTodo = (newInfo) => {

        fetch(
            url + "/todo/" + _task.id,
            {
                method: 'PUT',
                body: JSON.stringify(newInfo),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token,
                }
            }

        ).then((res) => {
            if (res.status === 200) return res.json();
            else if (res.status === 403) localStorage.removeItem('token')

        }).then(setTask({ id: _task.id, ...newInfo, important: _task.important, date_created: _task.date_created }))
    }

    return (

        <div className={`container ${important ? "important" : null}`} onDoubleClick={() => { if (!showEditModal) markImportant(_task.id) }}>
            <div className="header">
                <h3>{_task.name}</h3>
                <div onClick={rotateCaret}>{active ? <AiFillCaretDown /> : <AiFillCaretUp />}</div>

            </div>
            <div>
                {active ?
                    <TodoMenu deleteTodo={_delete} showModalHandler={showEditModalHandler} /> : null
                }
            </div>
            <p className="description">{_task.description}</p>
            <div className="date">{_task.date_created}</div>
            {(showEditModal) && <Backdrop onClick={closeModalHandler} />}
            {showEditModal && <Modal text={'Edit'} onClose={closeModalHandler} data={_task} onConfirm={editTodo} />}
            
        </div >

    )
}

export default Todo
