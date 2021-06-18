import React, { useContext } from 'react'
import { PostContext } from '../context/createContext'
import CreateEditForm from './CreateEditForm'




export default function EditPost() {

    
    const {editPost}=useContext(PostContext)
    

        return <CreateEditForm func={editPost}/>
        
    
}

	

	

	
    



