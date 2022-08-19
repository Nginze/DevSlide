import './App.css';
import Auth from './components/core/auth-page/Auth';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './components/core/Home/Home';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />a
        </Routes>
      </Router>
    </div>
  );
}

export default App;
      