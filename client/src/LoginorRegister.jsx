import React from 'react'
import { useState,useContext } from 'react'
import axios from 'axios'
import { UserContext } from './Usercontext'

export const LoginorRegister = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoginorRegister,setIsLoginorRegister] =useState('register')
    const{setUsername:setLoggedInUsername , setId} = useState(UserContext);

    async function handleSubmit(ev){
        ev.preventDefault();
        const url = isLoginorRegister ==='register'? 'register': 'login'
        const {data}=await axios.post(url,{username,password});
        setLoggedInUsername(username);
        setId(data.id);
    }
   
    
  return (
    <div className="bg-blue-50 h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit}>
            <input
            type='text' 
            placeholder='username'
            value={username}  
            onChange={ev => setUsername(ev.target.value)}
            className="block w-full rounded-sm p-2 mb-2 border"
            />
            <input
            type='text' 
            placeholder='password'
            value={password}  
            onChange={ev => setPassword(ev.target.value)}
            className="block w-full rounded-sm p-2 mb-2 border"
            />
            <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                {isLoginorRegister === 'register' ? 'Register' : 'Login'}
            </button>
            <div className="text-center mt-2">
                {isLoginorRegister =='register' && (
                    <div>
                        Already have a account?
                        <button className="ml-1 text-gray-600" onClick={() => setIsLoginorRegister('login')}>
                            Login here
                        </button>
                    </div>
                )}
                {isLoginorRegister =='login' && (
                    <div>
                        Don't have a account?
                        <button className="ml-1 text-gray-600" onClick={() => setIsLoginorRegister('register')}>
                            Register here
                        </button>
                    </div>
                )}
            </div>
        </form>
    </div>
  )
}
