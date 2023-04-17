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
import Login from './Views/Login';
import CreateAccount from './Views/CreateAccount';
import ForgotPassword from './Views/ForgotPassword';

function App() {

  return (
    <div className="bg-slate-100 h-full w-full overflow-hidden">
      <Router>
        
        <Header />

        {/* Main Content */}
        <div className="flex justify-center">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/match" element={<Match />}></Route>
            <Route exact path="/petForm" element={<PetForm />}></Route>
            <Route exact path="/ownerForm" element={<OwnerForm />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/createAccount" element={<CreateAccount />}></Route>
            <Route exact path="/forgotPassword" element={<ForgotPassword />}></Route>
          </Routes>
        </div>

      </Router>   
    </div>
  );
}

export default App;
