import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    if (error) {
      alert('Login failed: ' + error.message);
      console.error(error);
    } else {
      navigate('/');
    }
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
    });
    if (error) {
      alert('Signup failed: ' + error.message);
      console.error(error);
    } else {
      alert('Success! Check your email to confirm, then log in.');
      navigate('/login');
    }
  };

  return (
    <section className="container" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Login</h2>
        <p>Enter your registered email and password to continue.</p>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
        />
        <button
          id="login-btn"
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div>
        <h2>Register</h2>
        <p>New here? Add your email and password to create an account. A confirmation link will be sent to your inbox.</p>
        <input
          type="email"
          id="reg-email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
        />
        <input
          type="password"
          id="reg-password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
        />
        <button
          id="signup-btn"
          className="btn btn-primary"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Login;