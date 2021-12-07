import React from 'react';
import './videoItemList.css'
import VideoItem from "../videoItem/videoItem";

const VideoItemList = (props) => (

    <div className="itemContainer">
        {props.items.map(item =>(
            <VideoItem
                key = {item.id.videoId}
                url = {item.snippet.thumbnails.default.url}
                title = {item.snippet.title}
                description = {item.snippet.description}
            />
        ))}
    </div>
);

export default VideoItemList;