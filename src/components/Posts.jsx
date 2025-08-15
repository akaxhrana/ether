import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
      if (error) console.error('Error fetching posts:', error);
      else setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <section className="featured-posts">
      <div className="container">
        <h2 className="section-title">Recent Thoughts</h2>
        <p className="section-subtitle">
          Exploring life, existence, and the simple hacks that help us navigate through it all
        </p>
        <div className="posts-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-meta">
                <time>{new Date(post.created_at).toDateString()}</time>
                <span>{post.author}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Posts;