import React from 'react';
import styles from './index.css';

const FeedItem = ({ title, time, subreddit, user, stats }) => {

  return (
    <div className={`${styles.item} ${styles.card}`}>
      <div className={styles.votes}>
        <div>^</div>
        <div>{stats.votes}</div>
        <div>v</div>
      </div>
      <div className={styles.post}>
        <div className={styles.postInfo}>{subreddit} | Posted by {user} at {time}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.engagement}>Comments: {stats.comments}</div>
      </div>
    </div>
  );

}

export default FeedItem;
