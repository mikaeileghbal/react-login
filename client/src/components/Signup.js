import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:4000/api";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postSignUpDetails = () => {
    fetch(BASE_URL + "/register", {
      method: "POST",
      body: JSON.stringify({ email, password, tel, username }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          alert(data.message);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSignUpDetails();
    setEmail("");
    setTel("");
    setUsername("");
    setPassword("");
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
