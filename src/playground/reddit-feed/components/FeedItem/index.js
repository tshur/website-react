import React from 'react';
import styles from './index.css';

const FeedItem = ({ title, created, subreddit, author, score, num_comments }) => {

  return (
    <div className={`${styles.item} ${styles.card}`}>
      <div className={styles.votes}>
        <div className={styles.vote}>^</div>
        <div>{score}</div>
        <div className={styles.vote}>v</div>
      </div>
      <div className={styles.post}>
        <div className={styles.postInfo}>{'r/' + subreddit} | Posted by {'u/' + author} at {created}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.engagement}>Comments: {num_comments}</div>
      </div>
    </div>
  );

}

export default FeedItem;
