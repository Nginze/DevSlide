import "./App.css";
import Auth from "./components/core/auth-page/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/errors/page-not-found/PageNotFound";
import Callback from "./components/core/callback/Callback";
import UserProvider from "./contexts/UserContext";
import Outlet from "./components/core/Home/Outlet";
import Match from "./components/core/Matches/Match";

const App = () => {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/matches" element={<Match />} />
            <Route path="/home" element={<Outlet/>} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/auth/callback" element={<Callback />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
