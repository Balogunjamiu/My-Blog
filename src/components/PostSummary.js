import React from 'react'
// import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'

export default()=>(
    <div className="content-container">
        <div>
        <Link to='/create'>
        <p>Add Post</p>
        </Link>
        </div>
        
    </div>
)