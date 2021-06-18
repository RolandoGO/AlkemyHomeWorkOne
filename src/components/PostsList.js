import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";

import { PostContext } from '../context/createContext'

export default function PostsList(props) {

    
    
    const {posts,deletePost,setPostEdition}=useContext(PostContext)
    const {setPostDetail}=props
    const history=useHistory()

    function handleEdit(post){

        history.push("/EditPost")
        setPostEdition(post)
        
    
    }
    
    

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Title</th>
               
                <th scope="col">Actions</th>
                
                </tr>
            </thead>
                    
  
            <tbody>
                {posts&&posts.map(post=>{
                    
                    return(
                        <tr className="table-light" key={post.id}>
                            <td>{post.title}</td>
                                <td><button className="btn btn-dark btn-sm" onClick={()=>setPostDetail(post)} >Detalle</button></td>
                                <td><button className="btn btn-dark btn-sm" onClick={()=>handleEdit(post)}>Editar</button></td>
                                <td><button className="btn btn-danger btn-sm" onClick={()=>deletePost(post)} >Eliminar</button></td>
                                
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
