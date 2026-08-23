import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailsPage from "./pages/ProductsDetails/ProductsDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import AccountPage from "./pages/Account/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route
            path="/products/:id"
            element={<ProductDetailsPage />}
          />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;