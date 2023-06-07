import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';
import { makeAuthenticatedRequest } from '../api/authAPI';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const obtainAccessToken = async () => {
      try {
        const response = await api.post('/token/', {
          username: 'Derrekle@gmail.com',
          password: 'bootcamp123',
        });
        const { access } = response.data;
        setAccessToken(access);
      } catch (error) {
        console.error(error);
      }
    };

    obtainAccessToken();
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await makeAuthenticatedRequest('/userprofile/', accessToken);
        const fetchedUserProfile = response.data.results;
        setUser(fetchedUserProfile);
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    if (accessToken) {
      fetchUserProfile();
    }
  }, [accessToken]);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
