import React from 'react'
import './Navbar.css';
import SearchBar from './SearchBar';
const Navbar = ({ name, setAuthentication, searchTask }) => {
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token")
        setAuthentication(false);
    }
    return (
        <div className="navbar-collapse _navbar">
            <h1 className="_nav-name">{name.toUpperCase()}</h1>


            <SearchBar searchTask={searchTask}/>

            <button className="_nav-btn" onClick={logout}> Logout </button>
        </div>
    )
}

export default Navbar
