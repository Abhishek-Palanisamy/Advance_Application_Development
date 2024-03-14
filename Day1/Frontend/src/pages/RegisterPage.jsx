import React, { useState } from 'react'
import '../assets/css/styles.css'
function RegisterPage() {
    const[username,setName]=useState("");
    const[mobileno,setMobileno]=useState("");
    const[emailid,setEmail]=useState("");
    const[password,setPassword] = useState("");
  return (
    <>
    <div class="login-page2">
    <div class="login2">
      <center><h2 style={{fontSize:"25px"}}>Registeration</h2></center>
      <form class="form-login2" type="submit">
        <label for="name" style={{fontSize:'17px',fontWeight:'700'}}>User Name</label>
        <div class="input-email">
          <input type="text" placeholder="   Enter your Name" value={username} onChange={(e)=>setName(e.target.value)} required />
        </div><br/>
        <label style={{fontSize:'17px',fontWeight:'700'}}>Mobileno</label>
        <div class="input-email">
          <input type="tel" pattern="[6789][0-9]{9}" minLength={10} maxLength={10} value={mobileno} onChange={(e)=>setMobileno(e.target.value)} placeholder="   Enter your Number" required/>
        </div><br/>
        <label for="email" style={{fontSize:'17px',fontWeight:'700'}}>E-mail</label>
        <div class="input-email">
          <input type="email" value={emailid} onChange={(e)=>setEmail(e.target.value)} placeholder="   Enter your E-mail" required/>
        </div><br/>
        <label for="password" style={{fontSize:'17px',fontWeight:'700'}}>Password</label>
        <div class="input-password">
          <input type="password" minLength={8} maxLength={16} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="   Enter your Password" required />
        </div>
        <button type="submit" > Register</button>
<h5>Already Have An Account?</h5>
      </form> 
    </div>
  </div>
    </>
  )
}

export default RegisterPage