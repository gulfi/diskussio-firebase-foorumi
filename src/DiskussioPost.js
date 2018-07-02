import React from 'react';
import styles from './DiskussioPost.css';

export default (props) => {
    console.log(props)
    return (
        <div className={styles.diskussioPost}>
            <a href="www.test.com">{props.title}</a>
            <div >
                <p >{props.comments} Comments </p>
            </div>
        </div>
    )
}