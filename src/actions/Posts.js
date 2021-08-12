import moment from 'moment'
import {  v4 as uuidv4} from 'uuid'

export const addPost = ({
    title="",
    body="",
    createdAt= 0
        }={}) =>({
    type: 'ADD_POST',
    post:{
        id: uuidv4(),
        title,
        body,
        createdAt
    }
})
export const removePost = ({id}={}) =>({
    type: 'REMOVE_POST',
    id
})
export const editPost = (id, updates)=>({
    type: 'EDIT_POST', 
    id, 
    updates
})