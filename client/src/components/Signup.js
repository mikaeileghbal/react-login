import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, username, tel });
  };
  const gotoLoginPage = () => navigate("/");

  return (
    <div className="signup__container">
      <h2>Sign up </h2>
      <form className="signup__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="tel">Phone number</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={tel}
          required
          onChange={(e) => setTel(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginBtn">SIGN UP</button>
        <p>
          Already have an account?
          <span className="link" onClick={gotoLoginPage}>
            {" "}
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
