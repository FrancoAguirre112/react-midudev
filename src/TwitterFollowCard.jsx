import { useState } from 'react';

export function TwitterFollowCard({ children, username, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt={`Avatar de ${username}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
