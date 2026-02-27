import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await login({ email, password });
      localStorage.setItem("access_token", res.accessToken);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ width: 360, padding: 20, border: "1px solid #ddd", borderRadius: 12 }}>
      <h1 style={{ marginTop: 0 }}>Welcome Back</h1>
      <p style={{ opacity: 0.7 }}>Sign in to continue your streak</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            required
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
            required
            minLength={6}
          />
        </label>

        {error && <div style={{ color: "crimson" }}>{error}</div>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        <button
          type="button"
          onClick={() => alert("Потом сделаем регистрацию :)")}
          style={{ opacity: 0.85 }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}