import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3000" });
axios.defaults.headers.post["Content-Type"] = "application/json";

export async function auth(username, password) {
  const result = await client.post("/auth", {
    username: username,
    password: password,
  });
  return result;
}
export async function profile() {
  const token = localStorage.getItem("token");
  if (!token) return;
  const result = await client.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (result.status === 403) return;
  else if (result.status === 200) return result;
}

export async function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const result = await client.get("/auth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (result.status === 403) return false;
  else if (result.status === 200) return true;
  return false;
}

export async function create(name, carbon, username, password) {
  const result = await client.put("/", {
    username: username,
    password: password,
    carbon: carbon,
    name: name,
  });
  return result;
}
