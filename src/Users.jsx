import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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


            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>


                {
                    users.map(user => (
                        <div className='card' key={user._id}>
                            <h3>{user.name}</h3>
                            <h3>{user.email}</h3>
                            <Link to={`/update/${user._id}`} style={{ marginRight: ".5rem" }}>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#f9f9f9' }}>
                                        <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
                                    </svg>
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(user._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#f9f9f9' }}>
                                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                                </svg>
                            </button>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Users;
