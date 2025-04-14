import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const handleLogin = (e)=>{
    e.preventDefault();
    if(username!=='' && password!==''){
      auth.loginAction({username:username, password:password})
      setUsername('');
      setPassword('');
    }
  }
  return (
    <div>
        <input type='text' name='username' placeholder='Username...' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password' name='password' placeholder='Password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage;