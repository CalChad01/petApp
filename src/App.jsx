import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Views/Home';
import Form from './Views/Form';

function App() {

  return (
    <div className="bg-white absolute h-full w-full">
      <Router>
        
        <Header />

        {/* Main Content */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/form" element={<Form />}></Route>
          </Routes>
        </div>

      </Router>   
    </div>
  );
}

export default App;
