import { useState } from "react";
import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Single from "./pages/singlepost/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = true;
  return (
    <div className="app">
      <Router>
        {user ? <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : ""}
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/write">
            {user ? <Write /> : <Redirect to="/login" />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Redirect to="/login" />}
          </Route>
          <Route path="/post/:id">
            {user ? <Single /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
