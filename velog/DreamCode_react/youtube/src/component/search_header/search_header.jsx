import React, {useRef} from 'react';
import styles from './search_header.module.css'

const SearchHeader = ({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () =>{
        handleSearch();
    }

    const onKeyPress = (event) =>{
        if(event.key === 'Enter') handleSearch();
    }


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="../../../public/images/logo.png" alt=""/>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder="search..." onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit">
                <img className={styles.buttonImg} src="../../../public/images/search.png" alt="" onClick={onClick}/>
            </button>
        </header>
    );
};

export default SearchHeader;