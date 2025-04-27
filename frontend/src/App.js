import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Carosel from "./Components/Carosel";

function App() {
  return (
    <>
      <BrowserRouter basename="/fullprojectmern12">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Main" element={<MainContent />} />
          <Route path="/products" element={<Carosel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
