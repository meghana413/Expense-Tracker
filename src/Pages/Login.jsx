import { useActionState, useState } from "react";
import "./Login.css";

function Login({ setUsername , setEmail }) {
  const [name, setName] = useState("");
  const [email, setEmailOf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;
    
    
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);

    setUsername(name);
    setEmailOf(email);
  };

  return (
    <div className="Login-Page">
    <div className="login-container">
      <h1 className="login-title">Expense Tracker</h1>

      <p className="login-subtitle">
        Enter your details to continue
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="login-input"
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmailOf(e.target.value)}
        />
      
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;