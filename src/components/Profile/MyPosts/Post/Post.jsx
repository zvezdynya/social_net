import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://images6.fanpop.com/image/photos/32400000/James-james-hetfield-32495895-1232-1744.jpg"></img>
            <div className={styles.post_text}>Hello! I'm fine and how are you?</div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;