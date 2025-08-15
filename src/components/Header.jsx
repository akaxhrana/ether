import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import aakaashaLogo from '../assets/main-logo.svg';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  const handleAuth = async () => {
    if (user) {
      await supabase.auth.signOut();
      setUser(null);
      navigate('/');
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo">
          <img src={aakaashaLogo} alt="Aakaasha Logo" className="logo-icon" />
          <span className="logo-text">aakaasha.in</span>
        </Link>
        <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>☰</div>
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/write">Write</Link></li>
          <li><Link to="/login" onClick={handleAuth} id="auth-link">
            {user ? 'Logout' : 'Login'}
          </Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;