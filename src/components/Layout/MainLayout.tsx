import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <Outlet />
    </div>
  );
}