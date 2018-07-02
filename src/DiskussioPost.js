import React from 'react';
import styles from './DiskussioPost.css';
import moment from 'moment';

export default (props) => {
    //console.log(props)
    return (
        
        <div className={styles.diskussioPost}>
           <h3> <a href="www.test.com">{props.title}</a></h3>
            <div >
                <p >{props.comments} Comments </p>
                <p>Submitted {moment(props.submitted).fromNow()}</p>
                <hr></hr>
            </div>
        </div>
    )
}