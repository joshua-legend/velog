import React from 'react';
import './videoItem.css'

const VideoItem = (props) => (
    <div className="itemBox">
        <img src={props.url} alt=""/>
        <div className="itemBox__description">
            <span>{props.title}</span>
            <span>{props.description}</span>
        </div>
    </div>
);

export default VideoItem;