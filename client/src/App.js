import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login, PhoneVerify, Signup } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/phone/verify" element={<PhoneVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
