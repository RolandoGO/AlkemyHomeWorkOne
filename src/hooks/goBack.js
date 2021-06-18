import { useHistory } from "react-router";


export default function GoBackArrow() {
    
    const history=useHistory()

    function goBack(){ history.push("/")}



    return {
        goBack
    }
}
