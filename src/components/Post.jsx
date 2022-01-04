import React from 'react';
import moment from 'moment';
import { firestore } from '../firebase';

const Post = ({ id, title, content, user, createdAt, stars, comments }) => {
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();
  const addStar = () => {
    postRef.set({ stars: stars + 1 }, { merge: true });
  };

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt).calendar()}</p>
        </div>
        <div>
          <button className="star" onClick={addStar}>Star</button>
          <button className="delete" onClick={remove}>Delete</button>
        </div>
      </div>
    </article>
  );
};

Post.defaultProps = {
  user: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0,
};

export default Post;
