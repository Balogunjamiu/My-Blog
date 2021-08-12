import PostsReducer from "../../reducers/Posts";
import posts from '../fixtures/posts';

test('should set default state',()=>{
    const state = PostsReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('shoud remove post by id ',()=>{
    const action = {
        type: "REMOVE_POST",
        id: posts[1].id
    }
    const state = PostsReducer(posts, action)
    expect(state).toEqual([posts[0],posts[2]])
})

test('should add post',()=>{
    const post = [{
        id:'555',
        title:'New',
        body:'hgkjhkjhjk',
        createdAt:0
    }]
    const action = {
        type:'ADD_POST',
        post
    }

    const state = PostsReducer(posts, action)
    expect(state).toEqual([...posts, post])
})

test('should edit an Post with id',()=>{
    const title = "Hello"
    const action = {
        type: 'EDIT_POST',
        id: posts[1].id,
        updates: {
            title
        }
    }
    const state = PostsReducer(posts, action)
    console.log(state[1])
    expect(state[1].title).toBe(title)
})