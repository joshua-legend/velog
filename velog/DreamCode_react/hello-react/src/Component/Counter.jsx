import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0,
        }
    }
    render() {
        //destructing assigment
        const {number} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    this.setState({number:number+1});
                }}>더하기</button>
            </div>
        );
    }
}
Counter.propTypes = {};
export default Counter;
