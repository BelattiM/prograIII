import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/header.jsx'; 
import Footer from './components/layout/footer/footer.jsx';
import HomeNoLogin from './pages/HomeNoLogin/HomeNoLogin.jsx';
import ModalLogin from './components/ui/modales/LogInModal/LogInModal';
import ModalSignin from './components/ui/modales/SignInModal/SignInModal';
import HomeLogueado from './pages/HomeLogueado/HomeLogueado.jsx';
import ColeccionUsuario from './pages/ColeccionUsuario/ColeccionUsuario.jsx';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [usuario, setUser] = useState('');


  // Función para cerrar sesión
  const handlerLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser('');
    setIsLogged(false);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          logueado={isLogged}
          onShowLogin={() => setShowLogin(true)} 
          onShowSignin={() => setShowSignin(true)} 
          user={usuario}
          onLogout={handlerLogout}
        />
        <Routes>
          <Route path="/" element={isLogged ? <HomeLogueado /> : <HomeNoLogin />} />
          <Route path="/coleccion" element={<ColeccionUsuario />} />
        </Routes>
        
        <Footer/>
        
        <ModalLogin 
          isOpen={showLogin} 
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => {
            setShowLogin(false);
            setIsLogged(true);
          }}
          setUser={setUser}
        />
        <ModalSignin 
          isOpen={showSignin} 
          onClose={() => setShowSignin(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
