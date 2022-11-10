import React from 'react';

import './index.css';

function Post({body, title, date, author, highlights, image}) {
  return <article>
    <h1>{title}</h1>
    <p>{author}</p>
    <p>{date}</p>
    <p>{body}</p>
    {highlights.map((highlight, index) => {
      return <li key={index}>{highlight}</li>
    })}
    <img src = {image.link} alt={image.alt}></img>
  </article>
}

export default Post;


