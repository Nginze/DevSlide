import "./App.css";
import Auth from "./components/core/auth-page/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/core/Home/Home";
import PageNotFound from "./components/errors/page-not-found/PageNotFound";
import Callback from "./components/core/callback/Callback";
import UserProvider from "./contexts/UserContext";

const App = () => {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/auth/callback" element={<Callback />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
