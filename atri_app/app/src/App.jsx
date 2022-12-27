import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Blog from "./pages/Blog.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
  );
}
