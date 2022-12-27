import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import BookCall from "./pages/Book_Call.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/Book_Call" element={<BookCall />} />
    </Routes>
  );
}
