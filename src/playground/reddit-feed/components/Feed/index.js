import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.css';

import FeedItem from '../FeedItem';

const API = 'https://www.reddit.com/'
const SUBREDDIT = 'r/aww/';
const QUERY = 'hot.json?';

class Feed extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;
    this._source = axios.CancelToken.source();
    this.state = {
      posts: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios.get(API + SUBREDDIT + QUERY, { cancelToken: this._source.token })
      .then(result => {
        if (!this._isMounted) return;
        this.setState({
          posts: result.data.data.children,
          isLoading: false
        });
      })
      .catch(error => {
        if (!this._isMounted) return;
        this.setState({
          error,
          isLoading: false
        });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._source.cancel('Operation canceled due to component being unmounted.');
  }

  render() {
    const { posts, isLoading, error } = this.state;

    if (isLoading)
      return <p>Loading...</p>

    if (error)
      return <p>Error...</p>

    return (
      <div className={styles.feed}>
        {Object.values(posts).map(post =>
          <FeedItem
            key={post.data.id}
            {...post.data}
          />
        )}
      </div>
    );
  }
}


export default Feed;
