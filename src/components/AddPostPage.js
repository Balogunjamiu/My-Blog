
import React from 'react'
import {connect} from 'react-redux'
import {startAddPost } from '../actions/Posts'
import PostForm from './PostForm'

export class AddPostPage extends React.Component{
        onSubmit=(post)=>{
            this.props.startAddPost(post)
            this.props.history.push('/dashboard')
        }
        render(){
            return(
                <div className="page-header">
                <div className="content-container">       
                    <h1 className="page-header__title"> Add post</h1>
                    <PostForm
                    onSubmit={this.onSubmit}
                    />

                </div>

                </div>
            )
        }
}

const mapDispatchtoProps=(dispatch)=>({
    startAddPost:(post)=> dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchtoProps)(AddPostPage)