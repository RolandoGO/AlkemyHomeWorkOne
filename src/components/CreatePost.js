import React, { useContext } from 'react'
import { PostContext } from '../context/createContext';
import CreateEditForm from './CreateEditForm';




export default function CreatePost() {

    
    const {createPost}=useContext(PostContext)

    
   return <CreateEditForm func={createPost}/>
        
    
}

	

 