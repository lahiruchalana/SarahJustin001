import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import Home from './views/Home';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
