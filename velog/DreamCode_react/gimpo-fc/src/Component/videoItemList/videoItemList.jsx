import React from 'react';
import './videoItemList.css'
import VideoItem from "../videoItem/videoItem";

const VideoItemList = (props) => (

    <div>
        {props.videos.map(x=>(
            <VideoItem x={x}></VideoItem>
        ))}
    </div>
);

export default VideoItemList;