import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

export default ({id,title, body, createdAt}) =>(
    <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
        <p>{body}</p>
        <h4>{moment(createdAt).format('MMMM Do, YYYY')}</h4>    
    </Link>
)