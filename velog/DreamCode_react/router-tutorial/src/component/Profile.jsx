import React from 'react';

const data = {
    velopert :{
        name : `김민준`,
        description : `리액트를 좋아하는 개발자`
    },
    joshua :{
        name : `조슈앙`,
        description : `리액트를 공부하는 개발자`
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile) {return <div>존재하지 않은 유저 입니다.</div>}

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
};
export default Profile;
