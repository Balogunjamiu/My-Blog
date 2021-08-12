 

 import moment from 'moment'
 
 const filtersReducersDefaultState = {
     text : '',
     sortBy: 'date',
     StartDate: moment().startOf('month'),
     EndDate: moment().endOf('month')
 }

 export default(state= filtersReducersDefaultState, action)=>{
     switch(action.type){
         case 'TEXT_TO_FILTER':
             return {
                 ...state,
                 text: action.text
             }
             case 'SORT_BY_TITLE':
                 return {
                     ...state,
                     sortBy:'title'
                 }
                 case 'SORT_BY_DATE':
                 return {
                     ...state,
                     sortBy:'date'
                 }
                 case 'SET_START_DATE':
                     return {
                         ...state,
                         startDate: action.startDate
                     }

                     case 'SET_START_DATE':
                     return {
                         ...state,
                         endDate: action.endDate
                     }

            default:
                return state

     }
 }