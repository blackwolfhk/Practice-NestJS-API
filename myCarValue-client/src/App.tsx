import React, { useEffect, useState } from 'react';
import { getAllUsers } from './apiMiddleware';
import axios from 'axios';

interface User {
  id: number;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        console.log("fetchedUsers :", fetchedUsers);
        if (Array.isArray(fetchedUsers)) {
          setUsers(fetchedUsers);
        } else {
          console.error('Invalid data format for users');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div>
      <h4>Print All Users</h4>
      {users.map((user) => (
        <ul key={user.id}>
          <div>User ID:{user.id}</div>
          <div>User email: {user.email}</div>
        </ul>
      ))}
    </div>
  );
};

export default App;
