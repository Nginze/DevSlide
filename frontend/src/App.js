import './App.css';
import Auth from './components/core/auth-page/Auth';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './components/core/Home/Home';
import PageNotFound from './components/errors/page-not-found/PageNotFound';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path = "*" element = {<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
      