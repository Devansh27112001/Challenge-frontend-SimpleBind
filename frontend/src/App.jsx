import { Route, Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";
import ViewBooks from "./pages/ViewBooks";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/view-books" element={<ViewBooks />} />
        <Route path="/add-book-form" element={<AddBookPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
