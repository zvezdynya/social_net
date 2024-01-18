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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;