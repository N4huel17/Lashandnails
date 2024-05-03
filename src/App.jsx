
import { Outlet } from 'react-router-dom';
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
