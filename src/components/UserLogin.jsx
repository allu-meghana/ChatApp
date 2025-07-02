import React, { useState } from 'react';
import '../styles.css';

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState('');

  const handleUser = () => {
    if (!userName.trim()) return;
      const avatar = userName.toLowerCase() === 'meghana' ? 'img1.png' : 'img2.png';

    localStorage.setItem('user', userName);
    localStorage.setItem('avatar', avatar); 
    setUser(userName);
  };

  return (
    <div className='login_container'>
      <img src="img2.png" alt="" className="corner-img top-right" />
      <img src="img1.png" alt="" className="corner-img bottom-left" />
      <div className='login_title'>
        <h1 className='h'>Chat App</h1>
      </div>
      <div className='login_form'>
        <input
          type="text"
          placeholder='Enter a unique name'
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
