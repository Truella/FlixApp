import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SignUpPage from "./components/SignUp/SignUpPage";
import PopUp from "./components/PopUp/PopUp";
//import SignUpPage from "./components/SignUp/SignUpPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signIn" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
