import React from 'react'
import HomeDisplay from './HomeDisplay'
import { Route,Switch } from 'react-router'
import PostsDisplay from './PostsDisplay'
import CreatePost from './CreatePost'
import EditPost from "./EditPost"

export default function Home() {

    
    
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomeDisplay}/>
                <Route path="/Posts" component={PostsDisplay}/>
                <Route path="/CreatePost" component={CreatePost}/>
                <Route path="/EditPost" component={EditPost}/>


            </Switch>
            

        </div>
    )
}
