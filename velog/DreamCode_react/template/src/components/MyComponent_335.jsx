import React from 'react';

const MyComponent335 = (props) => {
    const {name, children} = props;
    return (
        <div>
            안녕하세요, 저의 이름은 {name} 이고<br/>
            chlidren 값은 {children} 입니다.
        </div>
    );
};

MyComponent335.defalutPrpos = {
    name : 'joshua'
};

export default MyComponent335;