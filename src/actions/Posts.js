import database from '../firebase/firebase'

export const addPost = (post) =>({
    type: 'ADD_POST',
    post
})

export const startAddPost = (postData = {})=>{
    return(dispatch,getState)=>{
        const uid = getState().auth.uid
        const {
            title='',
            body='',
            createdAt = 0
        }= postData;
        const post = { title, body, createdAt}
        return database.ref(`users/${uid}/posts`).push(post).then((ref)=>{
            dispatch(addPost({
                id:ref.key,
                ...post
            }))
        })
    }
}
export const removePost = ({id}={}) =>({
    type: 'REMOVE_POST',
    id
})

export const startRemovePost = ({id}={})=>{
    return(dispatch, getState)=>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/posts/${id}`).remove().then(()=>{
            dispatch(removePost({id}))
        })
    }
}
export const editPost = (id, updates)=>({
    type: 'EDIT_POSTS', 
    id, 
    updates
})

export const startEditPost = (id, updates)=>{
    return(dispatch, getState)=>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/posts/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id, updates))
        })
    }
}

export const setPost=(posts)=>({
    type:'SET_POST',
    posts
})

export const startSetPosts =()=>{
    return(dispatch, getState)=>{
        const uid =  getState().auth.uid
        return database.ref(`users/${uid}/posts`).once('value').then((snapshot)=>{
            const posts = []
            snapshot.forEach((childSnapshot)=>{
                posts.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(posts))
        })
    }
}
