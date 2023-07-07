import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/auth');
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>User Page</h1>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserPage;
