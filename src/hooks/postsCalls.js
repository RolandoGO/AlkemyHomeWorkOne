import { useState , useEffect } from "react";
import axios from "axios"
import {POSTS_ENDPOINT} from  "../apis/urls"
import postHandleDeleteApi from "../apis/postHandleDeleteApi";
import postHandleEditApi from "../apis/postHandleEditApi"
import postHandleCreateApi from "../apis/postHandleCreateApi";



export default function PostsCalls(){

    
    
    const [posts,setPosts]=useState([])
    const [postEdition,setPostEdition]=useState(null)


    async function handlePostCall(source){
        try{
            const postCall= await axios.get(POSTS_ENDPOINT,{cancelToken: source.token})
           setPosts(postCall.data)
            

        }
        catch(err){
            if(err.response)alert("No esta el recurso pedido")
            else if (err.request)alert("error en la conexcion o el la direcion url")

        }
    }

    useEffect(()=>{
        const source = axios.CancelToken.source();
        handlePostCall(source)
        return ()=>source.cancel()

    },[])

     async function deletePost(post){
        
        if(await postHandleDeleteApi(post)){
            const copyPosts=[...posts]
            const delPost=copyPosts.filter(d=>d.id!==post.id)
            setPosts(delPost)
        }
        
    }

    async function editPost(values,history){
        
        const{title,content}=values
        
        

        if(postEdition){
            if(await postHandleEditApi(postEdition,title,content)===true){
                
                const copyPosts=[...posts]
                const editPostindex=copyPosts.findIndex(p=>p.id===postEdition.id)
                const editObj=
                {...postEdition,
                    body:content,
                    title}
                    
                copyPosts.splice(editPostindex,1,editObj)
                setPosts(copyPosts)
                history.push("/Posts")
                
            }
            else{alert("Error in the edit process, you can`t edit a created post")}
       


        }

        else{alert("select a post first")}
       
    }
    

    async function createPost(values,history){

       const newPost= await postHandleCreateApi(values)

        if(newPost){
            const copyPost=[newPost,...posts]
            setPosts(copyPost)
            history.push("/Posts")
            
        }
        else{
            alert("Error on creating the post")
        }

    }


    return{
        posts,
        deletePost,
        editPost,
        setPostEdition,
        createPost
        
    }


}