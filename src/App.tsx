import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./common/layouts/Header/Header";

// Lazy loading components
const Photos = lazy(() => import("./pages/Photos/Photos"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const SinglePhoto = lazy(() => import("./pages/Single-photo/Single-photo"));

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-right" autoClose={2500} />
      <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/photos/:id" element={<SinglePhoto />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
