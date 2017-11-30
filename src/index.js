import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Tweet = () => {
  return (
    <div className = "tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /> <Time />
        <Message />
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <img src="https://www.gravatar.com/avatar/nothing"
    className="avatar"
    alt="avatar" />
  );
}

const Message = () => {
  return (
    <div className="message">

    This is a simple message!
    </div>
  );
}

const NameWithHandle = () => {
  return (
    <span className="name-with-handle">
      <span className="name"> Someone Name
      </span>

      <span className="handle"> @Someone
      </span>
    </span>
  );
}

const Time = () => (
  <span className="fa fa-reply reply-button"/>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet />, document.getElementById('root'));
