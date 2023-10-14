import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);

        fetch(`http://localhost:5500/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("User modified successfully.");
                }
            })
    }
    return (
        <div>
            <h2>Update information of <span style={{ color: "blue" }}>{loadedUser.name}</span> </h2>
            <form onSubmit={handleUpdate} className='card' style={{ display: "flex", flexDirection: "column", border: "1px solid blue", borderRadius: "16px", gap: "16px" }}>
                <input type="text" name="name" placeholder='Name' defaultValue={loadedUser?.name} />
                <input type="email" name="email" placeholder='Email' defaultValue={loadedUser?.email} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;