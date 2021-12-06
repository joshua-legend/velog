import React from 'react';
import './videoItem.css'

const VideoItem = (props) => (
    <div className="container">
        <img src={props.url} alt=""/>
        <div>
            <span>{props.title}</span>
            <span>{props.description}</span>
        </div>
    </div>
);

export default VideoItem;