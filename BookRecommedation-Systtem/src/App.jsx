import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Writer from "./pages/Writer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AllBooks from "./pages/AllBooks/AllBooks";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/productPage"} element={<ProductPage />} />
      <Route path={"/writer"} element={<Writer />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/allbooks"} element={<AllBooks />} />
      <Route path={"/login"} element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
