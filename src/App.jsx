import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
}

export default App;
