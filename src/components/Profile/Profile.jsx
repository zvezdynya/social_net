import React from 'react';
import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <>
            <img className={styles.profile_top_img} src="https://w.forfun.com/fetch/f5/f50017e08f611baf19a45a1f08118bcf.jpeg"></img>
            <div className={styles.profile_person_info}>
                <img src="https://images6.fanpop.com/image/photos/32400000/James-james-hetfield-32495895-1232-1744.jpg" alt="person-avatar"></img>
                <div className={styles.profile_info_text}>
                    <div className={styles.profile_name}>James Hetfield</div>
                    <div className={styles.profile_name}>James Hetfield</div>
                </div>
            </div>
            <MyPosts />
            <div>
                Main content
            </div>
        </>
    )
}

export default Profile;