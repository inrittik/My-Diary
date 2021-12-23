import Navbar from './components/navbar/Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Create from './components/Create/Create';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/create" element={<Create />}/>
      
          <Route path="/" element={<Home/>} />
            
        </Routes>
    </Router>
    </div>
  );
}

export default App;
