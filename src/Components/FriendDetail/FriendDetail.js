import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friendInfo, setFriendInfo] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendInfo(data));
    }, [])
    const {name, email, phone, website, username} = friendInfo;
    
    return (
        <div style = {{marginLeft:"50px"}}>
            <p>This is Friend Detail Component : {friendId}</p>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            
        </div>
    );
};

export default FriendDetail;