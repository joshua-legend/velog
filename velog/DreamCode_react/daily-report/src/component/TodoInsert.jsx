import React, {useCallback, useState} from 'react';
import styles from './TodoInsert.module.css'
import {MdAddCircle} from 'react-icons/md'


const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value)
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert,value],
    )


    return (
        <form className={styles.TodoInsert} onSubmit={onSubmit}>
            <input
                placeholder={"할일을 입력하세요"}
                value = {value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAddCircle />
            </button>
        </form>
    );
};

export default TodoInsert;
