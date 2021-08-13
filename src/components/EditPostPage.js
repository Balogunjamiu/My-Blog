import React from 'react'
import PostForm from './PostForm'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import { startEditPost, startRemovePost} from '../actions/Posts'
Modal.setAppElement('#app')

export  class EditExpensePage extends React.Component{
    state= {
        isClosed: false
        
    }
    onSubmit=(post)=>{
        this.props.startEditPost(this.props.post.id, post)
        this.props.history.push('/dashboard')
    }
    onRemove=()=>{
        this.props.startRemovePost({id: this.props.post.id})
        this.props.history.push('/dashboard')
    }

    isClosed=()=>{
        this.setState(()=>({
            isClosed:false
           }))
    }
    isOpen=()=>{
       this.setState(()=>({
           isClosed:true
          }))
   }
   backHome=()=>{
       this.props.history.push('/dashboard')
   }
        
    render(){
        return(
            <div className="content-container">
                <h2 className="page-title__header"> Edit Post</h2>
                <PostForm 
                post={this.props.post}
                onSubmit={this.onSubmit}
                />
                <button className="button button--secondary"
                    onClick={this.isOpen}
                >Remove Expense</button>
                    <button className="button" onClick={this.backHome}>Home</button>
                <Modal
                isOpen={this.state.isClosed}
                onRequestClose = {this.isClosed}
                shouldCloseOnEsc={true}
                contentLabel = "Selected Option"
                closeTimeoutMS = {10}
                className="modal"
                >
                    <h3 className="modal__title">Are you sure</h3>
                    <div className="modal_button">
                    <button className="button__modal red"  onClick={this.onRemove}>Yes</button>
                    <button className="button__modal green"  onClick={this.isClosed}>No</button>
                    </div>
                </Modal>

            </div>

        )
    }

}

const mapDispatchToProps =(dispatch)=>({
    startEditPost:(id, updates)=> dispatch(startEditPost(id, updates)),
    startRemovePost:(data) => dispatch(startRemovePost(data))
})

const mapStateToProps=(state, props)=>({
    post: state.posts.find((post)=>post.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)