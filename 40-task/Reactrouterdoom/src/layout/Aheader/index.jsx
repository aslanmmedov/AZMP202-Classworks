import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div><h2>Admin Logo</h2>
    <ul>
        <li><Link to="/admin">Home</Link></li>
        <li><Link to="admin/about">About</Link></li>
        <li><Link to="admin/contact">Contact</Link></li>
    </ul>
    </div>
  )
}

export default AdminHeader