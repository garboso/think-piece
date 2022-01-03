import React, { Component } from 'react';
import { firestore } from '../firebase';
import { collectIdAndDocs } from '../utilities';
import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
  };

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();

    const newPost = collectIdAndDocs(doc);

    this.setState({ posts: [newPost, ...posts] });
  };

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get();
    const posts = snapshot.docs.map(collectIdAndDocs);

    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
