
export const setTextFilter = (text="") =>({
    type: 'TEXT_TO_FILTER',
    text
})
export const sortByTitle = () =>({
    type:  'SORT_BY_TITLE'
})
export const sortByDate = () =>({
    type:  'SORT_BY_DATE'
})
export const setStartDate = (startDate= undefined)=>({
    type: 'SET_START_DATE',
    startDate
})
export const setStartEnd = (endDate= undefined)=>({
    type: 'SET_End_DATE',
    endDate
})