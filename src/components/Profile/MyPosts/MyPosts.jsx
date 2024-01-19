import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.write_post}>
                <textarea maxLength="3000" placeholder='Write your post...'></textarea>
                <button className={styles.btn}>Add post</button>
            </div>
            <div>
                <h3>Posts</h3>
                <Post message='Hey, how are you?' likes_qnt='15' />
                <Post message="I'm fine today!" likes_qnt='6' />
                <Post message="It's my post." likes_qnt='10' />
                <Post message="What are you doing now?" likes_qnt='3' />
            </div>
        </div>
    )
}

export default MyPosts;