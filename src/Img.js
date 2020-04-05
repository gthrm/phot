import React from 'react';
import './Img.css';

export default function ComponentName(props) {
  const {
    url,
    title,
    setOnload
  } = props;
  return (
    <article className="card">
      <header>
        <div className="avatar">
          <img onLoad={setOnload} loading="lazy" src="https://pbs.twimg.com/profile_images/1142396782317592576/jNCRpeJK_400x400.jpg" alt="Pika" />
        </div>
        <div className="name">
          <a href="https://gthrm.github.io">gthrm.github.io</a>
        </div>
      </header>
      <div className="image">
        <img
          loading="lazy"
          src={url}
          alt={title}
        />
      </div>

      <div className="footer">
        <section>
          <span className="button">
            <svg
              aria-label="Нравится"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clipRule="evenodd"
                d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className="button">
            <svg
              aria-label="Комментировать"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clipRule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </section>
        <section className="likes">
          <a href="#">555 отметок "Нравится"</a>
          <div className="description">
            <a href="https://gthrm.github.io">gthrm.github.io</a>
            {' '}
            <span className="description-text"> 🤩</span>
          </div>
        </section>
        <section className="time-section">
          <time className="time">{title}</time>
        </section>
      </div>
    </article>
  );
}
