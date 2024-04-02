import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Login from "./pages/Login";
import Data from "./pages/Data";
import LeadVApp from "./pages/LeadVApp";
import SignUp from './pages/SignUp';
import Overview from './pages/Overview';
import "react-bootstrap/dist/react-bootstrap.min.js"; 
import DebtToIncome from './pages/DebtToIncome';
import PropertyAppraisal from './pages/PropertyAppraisal';
import RegulatoryCompliance from './pages/RegulatoryCompliance';
import IncomeVerification from './pages/IncomeVerification';
import CreditHistory from './pages/CreditHistory';
import ApplicantWorkHistory from './pages/ApplicantWorkHistory';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="data" element={<Data />} />
        <Route path="leadvapp" element={<LeadVApp />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="overview" element={<Overview />} />
        <Route path="DebtToIncome" element={<DebtToIncome />} />
        <Route path="PropertyAppraisal" element={<PropertyAppraisal />} />
        <Route path="RegulatoryCompliance" element={<RegulatoryCompliance />} />
        <Route path="IncomeVerification" element={<IncomeVerification />} />
        <Route path="CreditHistory" element={<CreditHistory />} />
        <Route path="ApplicantWorkHistory" element={<ApplicantWorkHistory />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
