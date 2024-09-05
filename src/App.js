import "./App.css";
import Main from "./components/main";
import "./i18n.js";
import React, { useEffect, useState } from "react";

function App() {
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
    <div className="App bg-qara">
      <Main data={data} />
    </div>
  );
}

export default App;
