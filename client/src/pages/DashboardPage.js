import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Navbar from '../components/Dashboard/Navbar'
import NewTaskButton from '../components/Dashboard/NewTaskButton'
import TodoList from '../components/Dashboard/TodoList'

const DashboardPage = ({ setAuthentication }) => {

    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({ name: "" });
    const token = localStorage.getItem("token")
    const url = "http://localhost:5000"

    const getUser = () => {
        fetch(
            url + "/",
            {
                method: 'GET',
                headers: {
                    'token': token,
                }
            }

        ).then((res) => {
            if (res.status === 200) return res.json();
            else if (res.status === 403) {
                localStorage.removeItem('token')
                setAuthentication(false)

            }

        }).then((data) => {
            setUser({ name: data.name })

        }).catch((err) => {
            localStorage.removeItem('token')
            setAuthentication(false)
        })
    }
    const getTodoList = () => {
        fetch(
            url + "/todo",
            {
                method: 'GET',
                headers: {
                    'token': token,
                }
            }
        ).then((res) => {
            return res.json();
        }).then((data) => {
            setTodoList(data.todos)
        }).catch((err) => {
            localStorage.removeItem('token')
            setAuthentication(false)
        })

    }

    const searchTask = (searchQuery) => {
        console.log(`Searching ${searchQuery}`)
        fetch(
            url + '/search?query=' + searchQuery.query,
            {
                method: "GET",
                headers:
                {
                    'Content-Type': "application/json",
                    "token": token
                }
            }).then((res) => {
                return res.json()
            }).then((data) => {
                setTodoList(data.searchResult)
            }).catch((err) => {
                localStorage.removeItem('token')
                setAuthentication(false)
            })
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    useEffect(() => {
        setIsLoading(true);
        getUser();
        getTodoList();
        setIsLoading(false);
    }, [])
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    else {
        return (
            <>
                <Navbar name={user.name} setAuthentication={setAuthentication} searchTask={searchTask} />
                {/* <Navbar name={"Nephy"} setAuthentication={setAuthentication} searchTask={searchTask} /> */}
                <TodoList todos={todoList} deleteTodo={deleteTodo} />
                <NewTaskButton setTodos={setTodoList} todos={todoList}/>


            </>
        )

    }
}

export default DashboardPage
