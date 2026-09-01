export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
}