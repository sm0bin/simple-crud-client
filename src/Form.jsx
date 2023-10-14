
const Form = () => {
    const handleUser = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get('name');
        const email = data.get('email');
        const user = { name, email };
        console.log(user);

        fetch("http://localhost:5500/users", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User Added Successfully');
                    e.target.reset();
                }
            })
    }


    return (
        <form onSubmit={handleUser} className='card' style={{ display: "flex", flexDirection: "column", border: "1px solid blue", borderRadius: "16px", gap: "16px" }}>
            <input type="text" name="name" placeholder='Name' />
            <input type="email" name="email" placeholder='Email' />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;