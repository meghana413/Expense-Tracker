import "./Navbar.css";

function Navbar({ username, setUsername }) {

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    setUsername("");
    setEmail("");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Expense Tracker 💰</h2>

      <div className="nav-right">
        {username ? (
          <>
            <span className="welcome">Hi, {username}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <span className="login-text">Please login</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;