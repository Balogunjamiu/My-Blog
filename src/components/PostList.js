import React from 'react'
import {connect} from 'react-redux'
import VisiblePost from '../selectors/posts'
import PostListItem from './PostListItem'

export const PostList = (props) => (

    <div className="content-container">
        {
            props.posts.length === 0 ?
            (
            <div><p>No Post</p></div>
            )
            :
            (
                props.posts.map((post)=>{
                return <PostListItem key ={post.id}{...post}/>
            })
            )
        }
    </div>
)


const mapStateToProps = (state) =>({
    posts : VisiblePost(state.posts, state.filters)
})

export default connect(mapStateToProps)(PostList)