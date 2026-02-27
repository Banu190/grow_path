import { api } from "./client";
import type { LoginRequest, LoginResponse } from "../types/auth";

// Сейчас сделаем “заглушку”, чтобы фронт работал даже без сервера.
// Потом просто уберёшь fallback и подключишь настоящий backend.
export async function login(payload: LoginRequest): Promise<LoginResponse> {
  try {
    return await api<LoginResponse>("/auth/login", { method: "POST", body: payload, auth: false });
  } catch {
    // fallback без сервера: любой email/password -> токен
    return { accessToken: "dev-token" };
  }
}