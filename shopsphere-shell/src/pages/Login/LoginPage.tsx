import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../auth/AuthContext";

function LoginPage() {
  const { login, isAuthenticated } = useAuth();

  const location = useLocation();

  if (isAuthenticated) {
    const from =
      location.state?.from?.pathname || "/";

    return <Navigate to={from} replace />;
  }

  return (
    <div className="container page">
      <div className="page-header">
        <span className="eyebrow dark">
          SHOPSPHERE
        </span>

        <h2>Login</h2>

        <p>
          Sign in to continue shopping.
        </p>
      </div>

      <button
        className="primary-button"
        onClick={login}
      >
        Login as Shivam
      </button>
    </div>
  );
}

export default LoginPage;