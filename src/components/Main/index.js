import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
    {posts.map(({text, postId, title, date, author, highlights, image}) => {
     return <Post body={text} key={postId} title={title} date={date} author={author} highlights={highlights} image={image}></Post>
    })}
  </main>;
}

export default Main;


