import React, {useContext}from 'react'
import { NavLink } from 'react-router-dom'
import { PostContext } from '../context/createContext'

export default function HomeDisplay() {
    const {logOut} = useContext(PostContext)
    return (
        <div>
            <button className="btn btn-primary m-2 btn-sm" onClick={logOut}>Log Out</button>
            <header className="intro">
                
                <h1 >Home</h1>
                <span>Un lugar donde podes ver los ultimos Posts online, editarlos,crear nuevos o eliminarlos.</span>
            </header>

            <aside className="sideMenu"> 
            <div className="menuItem"><NavLink to="/CreatePost" className="Links">Create Post</NavLink ></div>
                <div className="menuItem"><NavLink to="/Posts" className="Links">Post List</NavLink ></div>
                
               
                
                
            </aside>
        </div>
    )
}
