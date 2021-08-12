
//GET POST
import moment from 'moment'
export default (posts,{text, sortBy,startDate, endDate})=>{
    return posts.filter((post)=>{
        const createdAtMoment = moment(post.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = post.title.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 
        }else if(sortBy === 'title'){
            return a.title < b.title ? 1 : -1 
        }
    })
}