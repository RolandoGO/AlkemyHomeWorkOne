import axios from "axios";
import { POSTS_ENDPOINT } from "./urls";

export default  async function postHandleCreateApi(values,history){

    const{title,content}=values
    const newPost={
        title,
        body:content
    }
    
       
    


    try{
        const call = await axios.post(POSTS_ENDPOINT,newPost)
        if(call.data!==null){
            return call.data
            
            
        }
        else return false
        
    }
    catch{

        
        return false

    }

}