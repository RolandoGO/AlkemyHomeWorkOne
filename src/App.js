import { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom"
import Login from "./components/Login";
import Home from "./components/Home";
import PostsCalls from "./hooks/postsCalls"
import {PostContext} from "./context/createContext"

function App() {

  

    const {posts,deletePost,editPost,setPostEdition,createPost}=PostsCalls()
    const [tokenExist, setTokenExist] = useState(false);

    const logOut = () => {
      localStorage.clear();
      setTokenExist(false);
    };

    useEffect(() => {
      const token = localStorage.getItem("challengeToken");
      if (token) setTokenExist(true);
    }, []);

    
    const contextObj={
      posts,
      deletePost,
      editPost,
      setPostEdition,
      logOut,
      setTokenExist,
      createPost
    }

  return (
    <BrowserRouter>

      <PostContext.Provider value={contextObj}>
       <div className="w-100 container">

        {tokenExist? <Home/>:<Login/>}


      </div>

      </PostContext.Provider>
      
     
    
    </BrowserRouter>
  );
}

export default App;
