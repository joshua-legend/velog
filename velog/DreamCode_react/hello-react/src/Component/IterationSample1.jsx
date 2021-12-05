import React, {useState} from 'react';
import PropTypes from 'prop-types';

const IterationSample1 = props => {

    const [name,setName] = useState([
        {id: 1, text: `다리우스`},
        {id: 2, text: `제라스`},
        {id: 3, text: `잭스`},
        {id: 4, text: `다이애나`}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);


    const onChange = (e) =>{
        setInputText(e.target.value)
    }

    const onClick = () => {
        const obj = name.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId+1);
        setName(obj)
        setInputText('');
    }


    const nameList = name.map(x=><li>{x.text}</li>)
    return(
        <>
            <input type="text" value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가하기</button>
            <ul>{nameList}</ul>
        </>
    )
};

export default IterationSample1;
