import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByTitle, setStartDate, setEndDate} from '../actions/Filters'

 export class PostListsFilter extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    }
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortBy = (e) =>{
        if(e.target.value === 'date'){
            this.props.sortByDate()
        }else if (e.target.value === 'title'){
            this.props.sortByTitle()
        }
    }
    render(){
        return(
            <div className="content-container">
                    <div className="input-group">
                        <div className=" round">                       
                        <input
                         type="text"
                         className="text-input round"
                         placeholder="search post"
                         value={this.props.filters.text}
                         onChange={this.onTextChange}
                         />
                    </div>
                    <div className="input-group__item">
                        <select
                        className="select_pick"
                        value={this.props.filters.sortBy}
                        onChange={this.onSortBy}
                        >
                            <option value='date'>Date</option>
                            <option value='title'>Title</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                    <DateRangePicker 
                startDate ={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                startDateId={'start'}
                endDateId={'end'}
                /></div>
            </div> 
            </div>          
        )
    }
}

const mapStateToProps=(state)=>({
    filters: state.filters
})
const mapDispatchToProps = (dispatch)=> ({
    setTextFilter:(text)=> dispatch(setTextFilter(text)),
    sortByDate: ()=> dispatch(sortByDate()),
    sortByTitle: ()=> dispatch(sortByTitle()),
    setStartDate:(startDate) => dispatch(setStartDate(startDate)),
    setEndDate:(endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListsFilter)