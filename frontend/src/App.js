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
      {/* <html class="dark"> */}
      {/* <body class="bg-white text-black dark:bg-gray-900 dark:text-white"> */}
      {/* <Navbar />
      <MainContent />
      <Footer /> */}
      {/* </body>
      </html> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />/
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Main" element={<MainContent />} />
          <Route path="/carosel" element={<Carosel />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
