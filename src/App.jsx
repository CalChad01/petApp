import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Views/Home';
import PetForm from './Views/PetForm';
import OwnerForm from './Views/OwnerForm';
import Match from './Views/Match';

function App() {

  return (
    <div className="bg-white absolute h-full w-full">
      <Router>
        
        <Header />

        {/* Main Content */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/match" element={<Match />}></Route>
            <Route exact path="/petForm" element={<PetForm />}></Route>
            <Route exact path="/ownerForm" element={<OwnerForm />}></Route>
          </Routes>
        </div>

      </Router>   
    </div>
  );
}

export default App;
