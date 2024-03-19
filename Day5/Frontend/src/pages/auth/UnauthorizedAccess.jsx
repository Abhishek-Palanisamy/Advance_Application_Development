import React from 'react'
import '../../assets/css/Styles.css'
import { Link } from 'react-router-dom'
function UnauthorizedAccess() {
  return (
    <div className="unauthorized-access-container">
    <h1>Unauthorized Access</h1>
    <p>Please <a href="/">log in</a> to access this page.</p>
  </div>
  )
}

export default UnauthorizedAccess