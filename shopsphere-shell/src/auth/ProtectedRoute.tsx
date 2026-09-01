import {
  Navigate,
  useLocation,
} from "react-router-dom";

import { useAuth } from "./AuthContext";
import type { ProtectedRouteProps } from "../types/auth";


function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const {
    isAuthenticated,
  } = useAuth();

  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;