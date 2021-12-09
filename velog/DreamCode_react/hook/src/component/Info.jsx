import React, {useEffect, useState} from 'react';

const Info = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log(`useEffect는 렌더링 될 때마다 나타남`)
        console.log(`Didmount 와 Didupdate를 합친형태 = useEffect`)
        console.log(`렌더링이 완료고요`)
    })

    useEffect(()=>{
        console.log(`Didmount 형태`)
        console.log(`useEffect는 마운트 될때만 뒤에 emtpy array 추가하면. 될 때마다 나타남`)
    },[])

    useEffect(()=>{
        console.log(`Didupdate 형태`)
        console.log(`useEffect는 업데이트 될때만 뒤에 emtpy array 추가하면. 될 때마다 나타남`)
        console.log(nickname)
    },[nickname])

    const onChangeName = (e) =>{
        setName(e.target.value)
    }

    const onChangeNickname = (e) =>{
        setNickname(e.target.value)
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>이름: {name} </div>
            <div>닉네임: {nickname} </div>
        </div>
    );
};


export default Info;
