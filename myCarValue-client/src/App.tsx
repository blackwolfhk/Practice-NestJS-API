import React, { useEffect, useState } from 'react';
import { getAllUsers, getUserById } from './apiMiddleware';
import axios from 'axios';
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

// interface User {
//   id: number;
//   email: string;
// }

// const App: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [searchId, setSearchId] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);


//   useEffect(() => {
//     const fetchAllUsers = async () => {
//       try {
//         const fetchedUsers = await getAllUsers();
//         console.log("fetchedUsers :", fetchedUsers);
//         if (Array.isArray(fetchedUsers)) {
//           setUsers(fetchedUsers);
//         } else {
//           console.error('Invalid data format for users');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAllUsers();
//   }, []);

//   const handleSearch = async () => {
//     const id = parseInt(searchId, 10);
//     if (isNaN(id)) {
//       console.log("no id");
//       setSelectedUser(null);
//       return;
//     }
//     console.log("id :", id)

//     const user = await getUserById(id);
//     console.log("user :", user);
//     setSelectedUser(user);
//   }



//   return (
//     <div>
//       <h4>Search User By ID</h4>
//       <div>
//         <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {selectedUser ? (
//         <div>
//           <h3>User Found :</h3>
//           <p>ID: {selectedUser["id"]}</p>
//           <p>Email: {selectedUser["email"]}</p>
//         </div>
//       ) : (
//         <p>No user found with the provided ID</p>
//       )}


//       <h4>All Users</h4>
//       {users.map((user) => (
//         <ul key={user.id}>
//           <div>User ID:{user.id}</div>
//           <div>User email: {user.email}</div>
//         </ul>
//       ))}
//     </div>
//   );
// };

export default App;
