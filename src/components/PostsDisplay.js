import React,{useState} from 'react'
import PostsList from './PostsList'
import bakcArrow from "../icons/backArrow.svg"
import GoBackArrow from '../hooks/goBack'
import PostDetail from './PostDetail'


export default function PostsDisplay() {
    
    
    const {goBack}=GoBackArrow()
    const [postDetail, setPostDetail]=useState(null)

    

    return (
        <div>
            {postDetail?null:
            
            <button className="backArrow" onClick={goBack}>
                <img src={bakcArrow}/>
            </button>
            }
           
                <h2>Posts del dia</h2>
               
            
           
            
            {postDetail?<PostDetail postDetail={postDetail} setPostDetail={setPostDetail}/>:<PostsList  setPostDetail={setPostDetail}/>}
        </div>
    )
}
