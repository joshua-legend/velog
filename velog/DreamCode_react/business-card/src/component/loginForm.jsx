import React from 'react';
import PropTypes from 'prop-types';
import styles from './loginForm.module.css'
import {AiFillIdcard} from "react-icons/all";


const LoginForm = ({authService}) => {

    const onLogin = e =>{
        console.log(e.currentTarget)
        authService
            .login(e.currentTarget.textContent)
            .then()
    }

    return (
        <div className={styles.loginFormContainer}>
            <header>
                <div className={styles.logoText}>Business Card Maker!</div>
            </header>
            <section>
                <div className={styles.loginText}>Login</div>
                <button onClick={onLogin}>Google</button>
                <button onClick={onLogin}>Github</button>
            </section>
            <footer>
                <div className={styles.companyText}>Code your joshua!</div>
            </footer>
        </div>
    );
};

export default LoginForm;
