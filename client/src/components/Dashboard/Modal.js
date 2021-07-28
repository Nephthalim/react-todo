import React, { useRef } from 'react'
import './Modal.css'

const Modal = ({ text, onConfirm, onClose, data }) => {
    const nameRef = useRef();
    const descriptionRef = useRef();

    const actionTaskHandler = (e) => {
        e.preventDefault();
        const enteredName = nameRef.current.value
        const enteredDescription = descriptionRef.current.value
        const newTask = { 'name': enteredName, 'description': enteredDescription }
        console.log(newTask)
        onConfirm(newTask);
        onClose()
    }



    return (
        <div className='-modal'>

            <p>{text}</p>

            <form className="form" >
                {
                    data ?
                        <>
                            <div className="form-item">
                                <label>Name</label>
                                <input ref={nameRef} className="form-input form-control" type="text" defaultValue={data.name} />
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <input ref={descriptionRef} className="form-input form-control" type="text" defaultValue={data.description} />
                            </div>
                            <div className="form-btns">
                                <input type="submit" className="-btn" title='Confirm' onClick={actionTaskHandler} />
                                <button className='-btn -btn--alt' onClick={onClose}>
                                    Cancel
                                </button>
                            </div>
                        </>

                        :
                        <>
                            <div className="form-block">

                                <input className="form-input form-control" type="text" ref={nameRef} placeholder='Name' />
                                <input className="form-input form-control" type="text" ref={descriptionRef} placeholder='Description' />
                            </div>
                            <div className="form-btns">
                                <input type="submit" className="-btn" title='Confirm' onClick={actionTaskHandler} />
                                <button className='-btn -btn--alt' onClick={onClose}>
                                    Cancel
                                </button>
                            </div>
                        </>
                }

            </form>




        </div>
    )
}

export default Modal
