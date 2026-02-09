import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/user/login", {
      email,
      password
    });

    if (res.data.message) {
      alert("Invalid credentials");
    } else {
      alert("Login success");
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      <p onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
        New user? Register
      </p>
    </form>
  );
}

export default Login;
