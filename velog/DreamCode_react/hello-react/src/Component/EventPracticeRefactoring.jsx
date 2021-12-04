import React, {Component} from 'react';

class EventPracticeRefactoring extends Component {

    state = {
        msg:``,
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(x){
        this.setState({
            msg : x.target.value,
        })
    }
    handleClick(){
        alert(`😉`);
        this.setState({
            msg : ``,
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해라"
                    value = {this.state.msg}
                    //synthetic event
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>button</button>
            </div>
        );
    }
}

export default EventPracticeRefactoring;