import Home from "./Pages/home/Home";

import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Register />}
          />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/write"
            element={user ? <Write /> : <Register />}
          />
          <Route
            exact
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route exact path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
