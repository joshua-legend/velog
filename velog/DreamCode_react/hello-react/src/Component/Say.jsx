import React, {useState} from 'react';

const Say = (props) => {

    const [msg,setMsg] = useState('');
    const onClickEnter = () => setMsg("안녕하시랑요");
    const onClickLeave = () => setMsg("안녕히 가사요");

    return(
        <>
            <button onClick={onClickEnter}>하이</button>
            <button onClick={onClickLeave}>바이</button>
            <h1>{msg}</h1>
        </>
    )
};

export default Say;