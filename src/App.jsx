import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
