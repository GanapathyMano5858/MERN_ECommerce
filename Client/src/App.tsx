import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Auth/layout";
import AuthLogin from "./Pages/Auth/Login";
import AuthRegister from "./Pages/Auth/Register";
import AdminLayout from "./components/AdminView/Layout";
import AdminDashboard from "./Pages/AdminView/Dashboard";
import AdminProducts from "./Pages/AdminView/Products";
import AdminOrders from "./Pages/AdminView/Order";
import AdminFeatures from "./Pages/AdminView/Features";
import ShoppingLayout from "./components/ShoppingView/Layout";
import NotFound from "./Pages/NotFound/Index";
import ShoppingHome from "./Pages/ShoppingView/Home";
import ShoppingListing from "./Pages/ShoppingView/Listing";
import ShoppingAccount from "./Pages/ShoppingView/Account";
import ShoppingCheckOut from "./Pages/ShoppingView/CheckOut";
import CheckAuth from "./components/Common/CheckAuth";
import UnauthPage from "./Pages/UnauthPage";

function App() {
  const isAuthenticated = false;
  const user = null;

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>

          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} />
            <Route path="checkout" element={<ShoppingCheckOut />} />
            <Route path="account" element={<ShoppingAccount />} />
          </Route>
          <Route path="/unauth-page" element={<UnauthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
