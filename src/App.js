import { useState } from "react";
import "./App.css";
import Topbar from "./topbar/Topbar";
import Menu from "./menu/Menu";
import Home from "./pages/home/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="pages">
        <Home />
      </div>
    </div>
  );
}

export default App;
