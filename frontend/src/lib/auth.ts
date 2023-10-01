import { BACKEND_URL } from "@/constants/url";
import { User } from "@/types/user";

export async function login(email: string, password: string) {
  const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    const token = await res.text();
    window.localStorage.setItem("access_token", JSON.stringify(token));
    return token;
  }
}

export async function signup(
  email: string,
  password: string,
  name: string,
  phone: string,
  address: string
) {
  const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ email, password, name, phone, address }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    return await login(email, password);
  }
}

export async function logout() {
  if (!window) return;
  window.localStorage.removeItem("user");
}

export default async function fetchUser(): Promise<User | undefined> {
  if (!window) return;
  const user = window.localStorage.getItem("user");
  if (user) return JSON.parse(user) as User;

  const token = window.localStorage.getItem("access_token");
  if (!token) return undefined;

  const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) return (await res.json()) as User;
  return undefined;
}
