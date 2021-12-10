import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md'
import styles from './TodoListItem.module.css'


const TodoListItem = ({todo, onRemove}) => {

    const {id,text,checked} = todo;

    return (
        <div className={styles.TodoListItem}>
            <div className={styles.checkbox}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className={styles.remove} onClick ={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
