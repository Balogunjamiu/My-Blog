import React from 'react'
// import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'

export default()=>(
    <div className="content-container">
        <div className="page-header__action">
        <Link to='/create' className="button"> Add Post</Link>
        </div>
        
    </div>
)