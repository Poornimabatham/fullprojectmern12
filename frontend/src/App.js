import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Signup from "./Components/Signup";
import Carosel from "./Components/Carosel";
import Practice from "./Components/Practice";
import Forms from "./Components/Forms";

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
          <Route path="/Form" element={<Forms />} />
        </Routes>
      </BrowserRouter>
      {/* <Practice /> */}
    </>
  );
}

export default App;
