import React, {useCallback, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';


const getAverage = numbers =>{
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((before,after)=>before+after);
    return sum/numbers.length;
}


const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    //컴포넌트가 처음 렌더링될 때만 함수 생성
    const onChangeNumber = useCallback(e =>{
        setNumber(e.target.value);
    },[]);


    //number list 가 바뀌었을 때만 함수 생성
    const onInsert = useCallback(() =>{
        const newList = list.concat(parseInt(number));
        setList(newList)
        setNumber('')
        console.log(inputEl)
        //포커싱하기
        inputEl.current.focus();
    },[number,list]);

    const avg = useMemo(()=>getAverage(list),[list]);

    return (
        <div>
            <input value={number} onChange={onChangeNumber} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <span>평균값: {avg}</span>
            </div>
        </div>
    );
};

Average.propTypes = {

};

export default Average;
