import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  console.log(posts);
  
  return (
    <div>
      <h1> My App </h1>
    </div>
  );
}

export default App;
