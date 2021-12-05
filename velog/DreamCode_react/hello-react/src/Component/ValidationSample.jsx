import React, {Component} from 'react';
import styles from './validation.module.css'

class ValidationSample extends Component {

    state = {
        pw :``,
        clicked:false,
        validated:false
    }

    handleChange = (e)=>{
        this.setState({
            pw : e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked:true,
            validated: this.state.pw === '0000'
        })
        console.log(this.state.clicked);
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value = {this.state.pw}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ?  styles.success : styles.failure) : ''}
                />
                <button onClick={this.handleButtonClick}>Validation</button>
            </div>
        );
    }
}

export default ValidationSample;
