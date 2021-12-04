import React, {Component} from 'react';

class EventPractice extends Component {

    state = {
        msg:``,
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
                    onChange={
                        (x)=> {
                            this.setState({
                                msg: x.target.value
                            })
                        }
                    }
                />
                <button
                    onClick={
                        ()=>{
                            this.setState({
                                msg:``,
                            })
                        }
                    }
                >button</button>
            </div>
        );
    }
}

export default EventPractice;