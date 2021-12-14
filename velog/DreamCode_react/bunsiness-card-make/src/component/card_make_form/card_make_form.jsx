import React, {useRef} from 'react';
import styles from './card_make_form.module.css';
import Button from '../button/button';

const CardMakeForm = ({FileInput, onAdd}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            theme : themeRef.current.value,
            title : titleRef.current.value || '',
            email : emailRef.current.value || '',
            message : messageRef.current.value || '',
            fileName : '',
            fileURL : '',
        };
        console.log(formRef.current)
        formRef.current.reset();
        onAdd(card)
    };
    return (
        <form ref={formRef} className={styles.form}>
          <input ref={nameRef} className={styles.input} type="text" placeholder="name"/>
          <input
            ref={companyRef}
            className={styles.input}
            type="text"
            placeholder="company"
          />
          <select ref={themeRef} className={styles.select} placeholder="theme">
            <option placeholder="light">light</option>
            <option placeholder="dark">dark</option>
            <option placeholder="colorful">colorful</option>
          </select>
          <input ref={titleRef} className={styles.input} type="text" placeholder="title" />
          <input ref={emailRef} className={styles.input} type="text" placeholder="email" />
          <textarea ref={messageRef} className={styles.textarea} placeholder="message" />
          <div className={styles.fileInput}>
            <FileInput />
          </div>
          <Button name="Add" onClick={onSubmit} />
        </form>
    );
};

export default CardMakeForm;
