import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProtectedRoute from "./auth/ProtectedRoute";
import HomePage from "./pages/Home/HomePage";
// import ProductsPage from "./pages/Products/ProductsPage";
// import ProductDetailsPage from "./pages/ProductsDetails/ProductsDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import AccountPage from "./pages/Account/AccountPage";
import ProductsRemotePage from "./pages/Products/ProductsRemotePage";
import { AuthProvider } from "./auth/AuthContext";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            {/* <Route path="/products" element={<ProductsRemotePage />} /> */}
            <Route
              path="/products/*"
              element={<ProductsRemotePage />}
            />

            {/* <Route
            path="/products/:id"
            element={<ProductDetailsPage />}
          /> */}

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;