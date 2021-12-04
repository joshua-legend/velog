import React, {Component} from 'react';
import styles from './button1.module.css';

class Button1 extends Component {
    render() {
        return (
            <div className={styles.button}>
                <span className={styles.text}>123</span>
            </div>
        );
    }
}

export default Button1;