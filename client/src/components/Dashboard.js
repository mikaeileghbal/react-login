import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("username");
  };

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem("username")) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="dashboard">
      <h2 style={{ marginBottom: "30px" }}>Howdy, David</h2>
      <button className="signOutBtn" onClick={handleSignOut}>
        SIGN OUT
      </button>
    </div>
  );
}
