import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

if (loginBtn) {
  loginBtn.onclick = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('Login failed: ' + error.message);
      console.error(error);
    } else {
      window.location = 'index.html';
    }
  };
}

if (signupBtn) {
  signupBtn.onclick = async () => {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert('Signup failed: ' + error.message);
      console.error(error);
    } else {
      alert('Success! Check your email to confirm, then log in.');
      window.location = 'login.html';
    }
  };
}