import React, { Component } from 'react';
import styles from './index.css';

import FeedItem from '../FeedItem';

import { data as dummy_data } from '../../data/static-data.js';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dummy_data,
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.feed}>
        {Object.values(data).map(post =>
          <FeedItem
            key={post.post_id}
            {...post}
          />
        )}
      </div>
    );
  }
}


export default Feed;
