import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: 600, padding: 20, border: "1px solid #ddd", borderRadius: 12 }}>
      <h2>Dashboard</h2>
      <p>Вы вошли </p>

      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          navigate("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
}