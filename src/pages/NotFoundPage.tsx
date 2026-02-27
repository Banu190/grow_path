import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>404</h2>
      <p>Страница не найдена</p>
      <Link to="/login">На логин</Link>
    </div>
  );
}