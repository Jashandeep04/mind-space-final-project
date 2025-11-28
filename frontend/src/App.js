import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Dashboard from "./pages/Dashboard";
import Docs from "./pages/Docs";
import Sources from "./pages/Sources";

function App() {
  return (
    <>
      <nav>
  <div className="nav-wrapper teal darken-3">
    <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {/* Title on the left */}
      <Link
        to="/"
        style={{ fontSize: "1.6rem", fontWeight: 500, color: "white" }}
      >
        Mind Space
      </Link>

      {/* Links on the right */}
      <ul id="nav-mobile" style={{ display: "flex", gap: "20px", margin: 0 }}>
        <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
        <li><Link to="/journal" style={{ color: "white" }}>Journal</Link></li>
        <li><Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link></li>
        <li><Link to="/docs" style={{ color: "white" }}>Docs</Link></li>
        <li><Link to="/sources" style={{ color: "white" }}>Sources</Link></li>
      </ul>
    </div>
  </div>
</nav>


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
    </>
  );
}


export default App;
