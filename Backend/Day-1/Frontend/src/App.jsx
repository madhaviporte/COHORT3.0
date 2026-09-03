import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

 async function handleSubmit(e){
    e.preventDefault();

    try{
const response = await axios.post('http://localhost:3000/login',
 { email,
  password}
)
console.log(response.data);

    }catch(error){
      console.log(error.response.data);
      
    }
    
    
  }

  return (
    <div>
      <h1>Login Page</h1>

       <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Your Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="password" placeholder='Enter Your Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

<button type='submit'>Login</button>

       </form>

    </div>
  )
}

export default App
