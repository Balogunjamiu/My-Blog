export const setTextFilter=(text= "")=>({
    type: 'TEXT_TO_FILTER',
    text
})
export const sortByDate=()=>({
    type:'SORT_BY_DATE'
})
export const sortByTitle=()=>({
    type:'SORT_BY_TITLE'
})
export const setStartDate=(startDate = undefined)=>({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate=(endDate = undefined)=>({
    type: 'SET_END_DATE',
    endDate  
})
