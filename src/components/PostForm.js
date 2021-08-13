import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body :  '',
            createdAt: props.post ? moment(props.post.createdAt): moment(),
            calendarFocus:true,
            error:''
        }
    }
    onTitleChange =(e)=>{
        const title = e.target.value
        this.setState(()=>({title}))
    }
    onBodyChange =(e)=>{
        const body = e.target.value
        this.setState(()=>({body}))
    }
    onDateChange = (createdAt)=> {
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    };
    onFocusChange = ({ focused })=>{
        this.setState(()=>({calendarFocus: focused}))
    }
    onSubmit =(e)=>{
        e.preventDefault()
        if(!this.state.title){
            this.setState(()=>({error:"please provide a title"}))
        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                title: this.state.title,
                body:this.state.body,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }

        render(){
            return(
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error&& <p>{this.state.error}</p>}
                    <input
                    type="title"
                    placeholder="Title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocus}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    />
                    <textarea
                    placeholder="Body"
                    className="testarea"
                    value={this.state.body}
                    onChange ={this.onBodyChange}
                    ></textarea>
                    <div>
                        <button
                        className="button">Save Post</button>
                    </div>
                </form>

            )
        }   
}


