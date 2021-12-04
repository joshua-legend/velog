import React, {Component} from 'react';
import styles from './button2.module.css'

class Button2 extends Component {
    render() {
        return (
            <div className={styles.button}>
                <span className={styles.text}>123</span>
            </div>
        );
    }
}

export default Button2;