import axios from "axios";
import { POSTS_ENDPOINT } from "./urls";

export default  async function postHandleEditApi(post,title,content){

    const edition={

        ...post,
        title,
        body:content
    }
    


    try{
        const call = await axios.put(POSTS_ENDPOINT+post.id,edition)
        if(call.data!==null)return true
        
        
    }
    catch {return false}

    

}

        
  