import React, { useRef, useState } from "react";
import "../assets/css/styles.css";
function LoginPage() {
  const username = useRef(null);
  const password = useRef(null);
  const sub = (e) => {
    e.preventDefault();
    alert(username.current.value);
    console.log(password.current.value);  
      };
  return (
    <>
      <div class="login-page1">
        <div class="login1">
          <center>
            <h2 style={{ fontSize: "27px" }}>Login</h2>
          </center>
          <form class="form-login1" type="submit" onSubmit={sub}>
            <label for="email">Username</label>
            <div class="input-email">
              <input
                type="text"
                ref={username}
                placeholder="   Enter your Username"
                required
              />
            </div>
            <br />

            <label for="password">Password</label>
            <div class="input-password">
              <input
                type="password"
                ref={password}
                minLength={8}
                maxLength={16}
                placeholder="   Enter your Password"
                required
              />
            </div>
            <button type="submit"> Login</button>
            <h5>New? Click Here..</h5>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
