import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Public = () => {
  const [username, setUsername] = useState('');
  const nav = useNavigate();

  async function toBlog() {
    try {
      // Make a request to your server to check if the username exists
      const response = await fetch(`http://localhost:5000/users?username=${username}`);
      const userData = await response.json();
      console.log(response)
      console.log(userData)

      if (response.ok && userData.length > 0) {
        // Username exists, you can perform additional authentication logic if needed
        nav('/layout');
      } else {
        // Username not found or other error
        alert('Invalid username. Please enter a valid username.');
      }
    } catch (error) {
      console.error('Error checking username:', error);
      alert('Error checking username. Please try again.');
    }
  }

  return (
    <>
      <div className="public-container">
        <h2 className="public-heading">Ready, Set.. Awards!</h2>
        <div className="public-subheading">Enjoy ;)</div>
        <br></br>
        <div>
          <form>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="button" className="button" onClick={toBlog}>
              Let's Start
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Public;
