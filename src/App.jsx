import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Hospital from "./components/Hospital/Hospital";
import Profile from "./pages/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tests from "./pages/Test";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/queries" element={<Hospital />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test/:id" element={<Tests />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
