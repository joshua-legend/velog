import React, {Component} from 'react';

class Reset extends Component {

    reset = () =>{
        this.props.resetHabits();
    }


    render() {
        return(
            <button className="reset-button" onClick={this.reset}>Reset All</button>
        )
    }
}

export default Reset;
