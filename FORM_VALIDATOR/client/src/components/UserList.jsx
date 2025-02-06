import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (err) {
        if (err.response) {
          setError(`Error: ${err.response.status} - ${err.response.data.message || 'Failed to fetch users'}`);
        } else if (err.request) {
          setError('No response received from the server');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <style>{`
        body {
          background: #f7f9fc;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .user-container {
          width: 100%;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .user-list {
          list-style: none;
          padding: 0;
        }
        .user-item {
          padding: 15px;
          background: #eef1f7;
          margin: 10px 0;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, background 0.3s;
          cursor: pointer;
        }
        .user-item:hover {
          background: #dbe4f0;
          transform: scale(1.05);
        }
        .user-info {
          color: #333;
          font-size: 16px;
        }
        .username { color: #1e90ff; font-weight: bold; }
        .email { color: #28a745; }
        .dob { color: #dc3545; }
        .location { color: #6f42c1; }
      `}</style>
      <div className="user-container">
        <h1>All Users</h1>
        {loading && <p>Loading users...</p>}
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
        {!loading && users.length === 0 && !error && <p>No users found</p>}
        <ul className="user-list">
          {users.map((user) => (
            user._id ? (
              <li key={user._id} className="user-item">
                <span className="user-info username">Username:</span> {user.username} | 
                <span className="user-info email"> Email:</span> {user.email} | 
                <span className="user-info dob"> DOB:</span> {user.dateOfBirth} | 
                <span className="user-info location"> Location:</span> {user.location}
              </li>
            ) : null
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
