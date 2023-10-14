import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (id) => {
        fetch(`http://localhost:5500/users/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    alert("Successfully deleted one document.");
                    setUsers(initialUsers.filter(user => user._id !== id))
                } else {
                    console.error("No documents matched the query. Deleted 0 documents.");
                }
            })
    }
    return (
        <div>
            <h2>Total Users: {users.length}</h2>

            {
                users.map(user => (
                    <div className='card' key={user._id}>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </div>))
            }
        </div>
    );
};

export default Users;
