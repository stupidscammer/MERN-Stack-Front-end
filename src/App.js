import React, { useEffect, useState } from 'react';
import { RightX } from './containers/rightX/rightX.js';
import { LeftX } from './containers/leftX/leftX.js';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";



import Login from './containers/user/login';
import './App.css';

function App() {
  const [token, setToken] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    let _token = localStorage.getItem("token")
    setToken(_token)
    if (!_token) {
      navigate('/login')
    }
  }, [])

  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className='w-full flex flex-row space-x-10'>
            <div className='w-4/5'>
              <LeftX/>
            </div>
            <div className='w-1/5'>
              <RightX/>
            </div>
          </div>} 
        />
    </Routes>
  );
}

export default App;
