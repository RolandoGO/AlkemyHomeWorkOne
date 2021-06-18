import axios from "axios"
import {ALKEMY_ENDPOINT} from "./urls"



function handleErr(err){
    if(err.response)return {error:"Revisa que el mail o la contraseña sean correctas"}
    else if (err.request)return {error:"error en la conexcion o el la direcion url"}
}

export const loginApi = async values => {
	try {
		const response = await axios.post(ALKEMY_ENDPOINT, {
			password: values.password,
			email: values.email,
		})
        
		if (response) {
           
			localStorage.setItem("challengeToken", response.data.token);
			return true;
		}
	} 
    
    catch (err) {
		return handleErr(err)
		
	}
};