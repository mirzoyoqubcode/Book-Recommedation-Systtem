import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Writer from "./pages/Writer";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/productPage"} element={<ProductPage />} />
      <Route path={"/writer"} element={<Writer />} />
    </Routes>
  );
}

export default App;
