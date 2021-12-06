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
    const [ID, setID] = useState(5);

    const onChange = (e) =>{
        setInputText(e.target.value);
    }

    const onClick = () =>{
        const obj = name.concat({
            id:ID,
            text:inputText,
        })
        setID(ID+1);
        setInputText('');
        setName(obj);
    }

    const onRemove = x => {
        const newObj = name.filter(a => a.id !== x);
        setName(newObj);
    }

    const nameList = name.map(x=>(
        <li key={x.id} onDoubleClick={() => onRemove(x.id)}>
            {x.text}
        </li>
    ));
    return(
        <>
            <input type="text" value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가하기</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample1;
