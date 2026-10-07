import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../data/content.js";
import { useAuth } from "../context/AuthContext.jsx";
import "./Pages.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password) {
      setError(pages.loginError);
      return;
    }
    login(email.trim());
    navigate("/", { replace: true });
  };

  return (
    <section className="page wrap" aria-labelledby="login-title">
      <h1 id="login-title">{pages.loginTitle}</h1>
      <p className="page-lead">{pages.loginLead}</p>
      <form className="page-form" onSubmit={onSubmit}>
        <label className="field">
          <span>{pages.email}</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="field">
          <span>{pages.password}</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {error && <p className="page-error">{error}</p>}
        <button className="page-submit" type="submit">
          {pages.loginSubmit}
        </button>
      </form>
      <p className="page-hint">{pages.loginHint}</p>
    </section>
  );
}
