import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Writer from "./pages/Writer";
import SignupForm from "./pages/SignupForm/SignupForm";
import ProfileForm from "./pages/ProfileForm/ProfileForm";
import Login from "./pages/Login/Login";
import Statistic from "./pages/Statistic";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/productPage"} element={<ProductPage />} />
      <Route path={"/writer"} element={<Writer />} />
      <Route path={"/signupform"} element={<SignupForm />} />
      <Route path={"/profileform"} element={<ProfileForm />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/statistic"} element={<Statistic />} />
    </Routes>
  );
}

export default App;
