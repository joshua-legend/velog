import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
    return (
        <div>
            안녕하세요 bj {props.name} 입니다.<br />
            저의 나이는 {props.age} 이구요.<br />
            오늘은 {props.day} 입니다.
        </div>
    );
};

MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age:PropTypes.number,
};

export default MyComponent;
