import React, {Component} from 'react';

class Input extends Component {

    //참조하기
    inputRef = React.createRef();

    addHabit = event =>{
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.addHabit(name);
    }

    render() {
        return(
            <form className="section" onSubmit={this.addHabit}>
                <input
                    ref={this.inputRef}
                    className="section-input"
                    type="text"
                    placeholder="Habit"
                />
                <button className="section-button">Add</button>
            </form>
        )
    }
}

export default Input;
