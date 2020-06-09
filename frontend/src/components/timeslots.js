import React from 'react';

import TimeslotCard from './timeslot_card';

class Timeslot extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {placeholder: 
            {Monday: [["09:00","13:00"],["14:00","17:00"]],
             Tuesday:[["09:00","13:00"],["14:00","17:00"]], 
             Wednesday:[["09:00","13:00"],["14:00","17:00"]], 
             Thursday:[["09:00","13:00"],["14:00","17:00"]], 
             Friday:[["09:00","13:00"],["14:00","17:00"]]}
      }
    }
    
    render() {
        return (
            <div>
                {Object.keys(this.state.placeholder).map((item,index) =>
                (< TimeslotCard key={index} day={item} timeslots={this.state.placeholder[item]}/>)
                )}
            </div>
            
        )
    }
}

export default Timeslot;