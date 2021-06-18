import axios from "axios";
import { POSTS_ENDPOINT } from "./urls";

export default async function postHandleDeleteApi(post){

    try{
        const call = await axios.delete(POSTS_ENDPOINT+post.id)
        if(call.data!==null){
            return true
        }
    }
    catch{

        alert("error on delete process")
        return false

    }

}