import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { NotFoundPage } from "../pages/NotFoundPage";

// Пока без настоящей авторизации — заглушка.
// Потом заменишь на реальную проверку токена/сессии.
function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuthed = Boolean(localStorage.getItem("access_token"));
  return isAuthed ? <>{children}</> : <Navigate to="/login" replace />;
}

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];