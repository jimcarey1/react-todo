import React, { useState } from 'react'
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e)=>{
    e.preventDefault();
    if(username!=='' && password!==''){
      const {data} = await 
                     axios.post('http://localhost:8000/api/token/',
                     {username:username, password:password},
                     {headers:
                      {'Content-Type': 'application/json'},
                      withCredentials: true,
                    },
                    )
      console.log(data);
      localStorage.setItem('jwt', JSON.stringify(data));
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
      window.location.href = '/'
    }
    setUsername('');
    setPassword('');
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