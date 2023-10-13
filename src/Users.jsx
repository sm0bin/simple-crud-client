import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Total Users: {users.length}</h2>

            {
                users.map(user => (
                    <div className='card' key={user._id}>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                    </div>))
            }
        </div>
    );
};

export default Users;