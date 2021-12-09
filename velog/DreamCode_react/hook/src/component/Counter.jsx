import React, {useState} from 'react';

const Counter = (props) => {

    const [value, setValue] = useState(0);
    const plusValue = () =>{
        setValue(value+1)
    }
    const minusValue = () =>{
        setValue(value-1)
    }

    return(
        <div>
            <p>현재 카운터 값은 {value} 입니다.</p>
            <button onClick={plusValue}>더하기</button>
            <button onClick={minusValue}>빼기</button>
        </div>
    );
};

export default Counter;