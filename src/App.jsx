import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Posts />
    </>
  );
}

function Blog() {
  return <Posts />;
}

function About() {
  return (
    <section className="container" style={{ padding: '2rem' }}>
      <h2>About</h2>
      <p>A space for thoughts on life, existence, and finding peace in the uncontrollable.</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;