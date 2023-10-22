import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
      <h1>Simple CRUD Client</h1>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "2rem", justifyContent: "center" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
      {/* Name Email Form */}
      <Outlet></Outlet>
    </>
  )
}

export default App
