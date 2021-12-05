import React from 'react';
import PropTypes from 'prop-types';

const IterationSample = props => {
    const items = [`눈`,`낙엽`,`모래`,`꽃`]
    const itemsList = items.map(x=><li>{x}</li>)
    return (
        <ul>{itemsList}</ul>
    );
};

export default IterationSample;
