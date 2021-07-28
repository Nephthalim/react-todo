import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5";
import './NewTaskButton.css'
import Modal from './Modal'
import Backdrop from './Backdrop';

const NewTaskButton = ({ setTodos, todos }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const url = "http://localhost:5000"
    const token = localStorage.getItem('token');
    const addTask = (newTask) => {
        fetch(
            url + "/todo",
            {
                method: 'POST',
                body: JSON.stringify(newTask),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token,
                }
            }

        ).then((res) => {
            if (res.status === 200) return res.json();
            else if (res.status === 403) localStorage.removeItem('token')

        }).then((data) => {
            setTodos([...todos, data.todo])
        })
    }
    function showAddModalHandler() {
        setShowAddModal(true);
    }


    function closeModalHandler() {
        setShowAddModal(false);
    }

    return (
        <>
            <div className='-btn_add' onClick={showAddModalHandler}>
                <IoAddCircle />
            </div>
            {(showAddModal) && <Backdrop onClick={closeModalHandler} />}
            {showAddModal && <Modal text={'Add'} onClose={closeModalHandler} onConfirm={addTask} />}
        </>
    )
}

export default NewTaskButton
