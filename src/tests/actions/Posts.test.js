
import { addPost,
    removePost,
    editPost
         } from "../../actions/Posts";
import posts from '../fixtures/posts'


 test('should set up add post action object with the provided value',()=>{
     const action = addPost(posts[1])
     expect(action).toEqual({
         type:'ADD_POST',
         posts: {
             id:expect.any(String),
             title:posts[1].title,
             body:posts[1].body,
             createdAt:posts[1].createdAt
         }
     }) 
 })
 test('should set up remove post action with the provided value', ()=>{
     const id = posts[1].id
     const action = removePost({id})
     expect(action).toEqual({
         type:'REMOVE_POST',
         id
     })
 })
test('should set up edit post action object with the provided value', ()=>{
    const updates = {title:"New Blog"}
    const id = posts[1].id
    const action = editPost(id,updates)
    expect(action).toEqual({
        type:'EDIT_POST',
        id,
        updates
    })
})