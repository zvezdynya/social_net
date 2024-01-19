import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://images6.fanpop.com/image/photos/32400000/James-james-hetfield-32495895-1232-1744.jpg"></img>
            <div className={styles.post_text}>
                {props.message}
            </div>
            <div>
                <span>
                    {`${props.likes_qnt} likes`}
                </span>
            </div>
        </div>
    )
}

export default Post;