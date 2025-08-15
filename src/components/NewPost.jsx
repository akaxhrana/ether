import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('You must be logged in to post.');
      return;
    }
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content.');
      return;
    }

    const { error } = await supabase.from('blogs').insert({
      title,
      content,
      author: user.email,
    });

    if (error) {
      alert('Failed to post: ' + error.message);
    } else {
      alert('Post published successfully!');
      navigate('/');
    }
  };

  return (
    <section className="container" style={{ padding: '2rem' }}>
      <h2>Write Your Thought</h2>
      <input
        type="text"
        id="title"
        placeholder="Your thought's title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
      />
      <textarea
        id="content"
        placeholder="Write your thought here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '100%', height: '200px', padding: '0.5rem', margin: '1rem 0' }}
      ></textarea>
      <button
        id="submit-post"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
}

export default NewPost;