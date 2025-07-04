import React, {useState} from 'react';
import './App.css';
import Header from './components/layout/header/header.jsx'; 
import Footer from './components/layout/footer/footer.jsx';
import HomeNoLogin from './pages/HomeNoLogin/HomeNoLogin.jsx';
import ModalLogin from './components/ui/modales/LogInModal/LogInModal';
import ModalSignin from './components/ui/modales/SignInModal/SignInModal';
import HomeLogueado from './pages/HomeLogueado/HomeLogueado.jsx';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <Header 
        logueado={isLogged}
        onShowLogin={() => setShowLogin(true)} 
        onShowSignin={() => setShowSignin(true)} 
      />
      {isLogged ? <HomeLogueado /> : <HomeNoLogin />}
      <Footer/>
      
      <ModalLogin 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onLoginSuccess={() => {
          setShowLogin(false);
          setIsLogged(true);
        }}
      />
      <ModalSignin 
        isOpen={showSignin} 
        onClose={() => setShowSignin(false)} 
      />
    </div>
  );
}

export default App;
