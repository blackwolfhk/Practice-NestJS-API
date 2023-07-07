import React, { useEffect } from 'react';
import { getAllUsers } from './apiMiddleware';

const App: React.FC = () => {
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const users = await getAllUsers(); // Call the getAllUsers function
        console.log(users); // Log the retrieved users
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div>
      <div>Testing</div>
    </div>
  );
};

export default App;
