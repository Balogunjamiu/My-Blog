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
                    <div>
                        <input
                         type="text"
                         placeholder="search post"
                         value={this.props.filters.text}
                         onChange={this.onTextChange}
                         />
                    </div>
                    <div>
                        <select
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