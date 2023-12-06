import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Authentication from "./components/Authentication";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authentication/*" element={<Authentication />} />
        <Route
          path="/authentication"
          element={<Navigate to="/authentication/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
