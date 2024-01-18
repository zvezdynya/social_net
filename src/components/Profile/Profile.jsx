import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <main className="profile">
            <img className="profile-top-img" src="https://w.forfun.com/fetch/f5/f50017e08f611baf19a45a1f08118bcf.jpeg"></img>
            <div className="profile-person-info">
                <img className="profile-info-avatar" src="https://images6.fanpop.com/image/photos/32400000/James-james-hetfield-32495895-1232-1744.jpg" alt="person-avatar"></img>
                <div className="profile-info-text">
                    <div className="profile-name">James Hetfield</div>
                    <div className="profile-name">James Hetfield</div>
                </div>
            </div>
            <div>
                My posts
                <div>
                    whrite post
                </div>
            </div>
            <div>
                Posts
            </div>
            Main content
        </main>
    )
}

export default Profile;