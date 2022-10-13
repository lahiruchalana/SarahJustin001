import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header";
import Home from './views/Home/Home';
import OurStory from "./views/OurStory/OurStory";
import RSVP from "./views/RSVP/RSVP";
import Accomodations from "./views/Accomodations/Accomodations";
import Events from "./views/Events/Events";
import Albums from "./views/Albums/Albums";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/our-story' element={<OurStory />} />
          </Routes>
          <Routes>
            <Route path='/RSVP' element={<RSVP />} />
          </Routes>
          <Routes>
            <Route path='/accomodations' element={<Accomodations />} />
          </Routes>
          <Routes>
            <Route path='/events' element={<Events />} />
          </Routes>
          <Routes>
            <Route path='/albums' element={<Albums />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
