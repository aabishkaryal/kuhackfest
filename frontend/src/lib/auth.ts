export async function login(email: string, password: string) {
  // ...
}

export async function signup(
  email: string,
  password: string,
  name: string,
  phone: string,
  location: string
) {
  // ...
}

export async function logout() {}


import { User } from "@/types/user";

export default function fetchUser(): User | undefined {
  return {} as User;
}