import { useEffect } from "react";
import "./App.css";
import Followers from "./Pages/Followers";

import ProfilePage from "./Pages/ProfilePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </div>
  );
}

export default App;
