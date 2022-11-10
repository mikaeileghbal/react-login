import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:4000/api";

export default function PhoneVerify() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const postVerification = () => {
    fetch(BASE_URL + "/verification", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          navigate("/dashboard");
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postVerification();
    setCode("");
  };

  return (
    <div className="verify">
      <h2 style={{ marginBottom: "30px" }}>Verify your phone number</h2>
      <form className="verify__form" onSubmit={handleSubmit}>
        <label htmlFor="code" style={{ marginBottom: "10px" }}>
          A code has been sent your phone
        </label>
        <input
          type="text"
          name="code"
          id="code"
          className="code"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="codeBtn">AUTHENTICATE</button>
      </form>
    </div>
  );
}
