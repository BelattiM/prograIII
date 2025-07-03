import React from 'react';
import './App.css';
import Header from './components/layout/header/header.jsx'; 
import Footer from './components/layout/footer/footer.jsx';
import HomeNoLogin from './pages/HomeNoLogin/HomeNoLogin.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
      <HomeNoLogin/>
      <Footer/>
    </div>
  );
}

export default App;
