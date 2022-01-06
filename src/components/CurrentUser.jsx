import React from 'react';
import { auth } from '../firebase';
import moment from 'moment';
import { Link } from 'react-router-dom';

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="/profile"><h2>{displayName}</h2></Link>
          <p className="email">{email}</p>
          <p className="created-at">{createdAt ? moment(createdAt.toDate()).calendar() : null}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </section>
  );
};

export default CurrentUser;
