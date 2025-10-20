import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
    } else {
      setError("");
      // Log output in required format
      console.log(`Username: ${username}`);
      console.log(`Password: ${password}`);
    }
  };

  return (
    <div style={{
      maxWidth: 350,
      margin: "40px auto",
      border: "1px solid #eee",
      borderRadius: 8,
      padding: "32px 24px",
      background: "#fff"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: 12,
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: 12,
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        />
        {error && (
          <div style={{
            color: "red",
            textAlign: "center",
            marginBottom: 10,
            fontWeight: "bold"
          }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: 16,
            border: "none",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
