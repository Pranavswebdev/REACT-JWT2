import Router  from '../src/Router'
import React from 'react'
import axios from 'axios'
import { AuthContextProvider } from './context/AuthContext';
import './bg.css'
import placeTovisit from './components/placeTovisit';
axios.defaults.withCredentials=true
function App() {
  return (
    <div className="root"  >
      <AuthContextProvider>

        <Router />
    
    
      </AuthContextProvider>


 
    </div>
  );
}

export default App;
