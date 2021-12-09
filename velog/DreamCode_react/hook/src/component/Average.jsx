import React, {useState} from 'react';
import PropTypes from 'prop-types';


const getAverage = numbers =>{
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((before,after)=>before+after);
    return sum/numbers.length;
}



const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChangeNumber = (e) =>{
        setNumber(e.target.value);
    };

    const onInsert = () =>{
        const newList = list.concat(parseInt(number));
        setList(newList)
        setNumber('')
    };

    return (
        <div>
            <input value={number} onChange={onChangeNumber}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <span>평균값: {getAverage(list)}</span>
            </div>
        </div>
    );
};

Average.propTypes = {

};

export default Average;
