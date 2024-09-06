import "./App.css";
import Main from "./pages/main.js";
import ProjectPage from "./pages/project_page.js";
import Home from "./pages/home.js";
import "./i18n.js";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Animated = () => {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Main data={data} />} />
        <Route path="/projects/:name" element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="App bg-qara">
      <Router>
        <Animated />
      </Router>
    </div>
  );
}

export default App;
