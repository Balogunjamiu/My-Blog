const postReducerDefaultState = []

export default (state = postReducerDefaultState, action) =>{
    switch (action.type){
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ]
            case 'REMOVE_POST':
                return state.filter(({id}) => id !== action.id)

            case 'EDIT_POST':
                return state.map((post)=>{
                    if(post.id === action.id){
                        return {
                            ...post,
                            ...action.updates
                        }
                    }else{
                        return post
                    }
                })
                default:
                    return state
    }


}