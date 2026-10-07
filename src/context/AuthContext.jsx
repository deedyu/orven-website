import { createContext, useContext, useMemo, useState } from "react";

const KEY = "orven-auth";
const AuthContext = createContext(null);

function readUser() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser);

  const value = useMemo(
    () => ({
      user,
      login(email) {
        const next = { email };
        localStorage.setItem(KEY, JSON.stringify(next));
        setUser(next);
      },
      logout() {
        localStorage.removeItem(KEY);
        setUser(null);
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
