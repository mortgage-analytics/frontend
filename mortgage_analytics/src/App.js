import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Login from "./pages/Login";
import Data from "./pages/Data";
import "react-bootstrap/dist/react-bootstrap.min.js"; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="data" element={<Data />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
