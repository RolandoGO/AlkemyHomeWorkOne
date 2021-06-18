import React from 'react'

export default function PostDetail(props) {
   
    const {setPostDetail}=props
    const {postDetail}=props
    const error="No Content"

   

    return (

        <div>
            <button className="btn btn-sm btn-dark" onClick={()=>setPostDetail(null)}>X</button>
            <div className="intro">
                {typeof postDetail.body===typeof ""?<span>{postDetail.body}</span>:<span className="text-danger">{error}</span>}

            </div>
        </div>
    )
}
