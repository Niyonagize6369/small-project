import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registration from "./components/registration";
import Login from "./components/login";
import Background from "./assets/Background.jpg"; // ✅ Correct variable name

export default function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
