import React from 'react';


class TimeslotCard extends React.Component {
    
    constructor(props) {
        super(props);
    }
    


    render() {
        return (
            <div>
                <form>
                    <label htmlFor={this.props.day}>{this.props.day}</label>
                    <br />
                    <label htmlFor="timeStart">Timeslot start:</label>
                    <input type="time" id="timeStart" name="timeStart" required />
                    < br/>
                    <label htmlFor="timeEnd">Timeslot end:</label>
                    <input type="time" id="timeStart" name="timeEnd" required />
                </form>
                <button className='addButton btn btn-primary' type='submit'>Add</button>
                {this.props.timeslots.map((item,index) => 
                    (
                    <div key={index}>
                        <input type="time" value={item[0]} readOnly />
                        <input type="time" value={item[1]} readOnly />
                        <input value="✖" name="removeTimeSlot" onClick={(e) => this.props.changeHandler(e, this.props.day, index)} type="button" />
                    </div>
                    )
                )}
            </div>
            
        )
    }
}

export default TimeslotCard;