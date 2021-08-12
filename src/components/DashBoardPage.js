import React from 'react'
import PostList from './PostList'
import PostListsFilter from './PostFiltersList'
import PostSummary from './PostSummary'
export const DashBoardPage = () =>(
    <div>
        <PostSummary />
        <PostListsFilter />
       <PostList />

    </div>
)
export default DashBoardPage