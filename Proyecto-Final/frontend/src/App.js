import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header.jsx'; 
import Footer from './components/layout/footer.jsx';
import HomeNoLogin from './pages/HomeNoLogin.jsx';
import ModalLogin from './components/ui/modales/LogInModal.jsx';
import ModalSignin from './components/ui/modales/SignInModal.jsx';
import HomeLogueado from './pages/HomeLogueado.jsx';
import ColeccionUsuario from './pages/ColeccionUsuario.jsx';
import GeneroJuegos from './pages/GeneroJuegos.jsx';
import VerAllGames from './pages/VerAllGames.jsx';
import AgregarJuegoUsuario from './pages/AgregarJuegoUsuario.jsx';
import HomeAdmin from './pages/HomeAdmin.jsx';
import { Navigate } from 'react-router-dom';
import ModalContacto from './components/ui/modales/ModalContacto.jsx';
import ModalInfo from './components/ui/modales/ModalInfoFooter.jsx';
import ModalImagen from './components/ui/modales/ModalImagenFooter.jsx';
import logo from './assets/icons/MainLogo.jpg';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showContacto, setShowContacto] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showImagen, setShowImagen] = useState(false);
  const [usuario, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : '';
  });
  const [isLogged, setIsLogged] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return !!savedUser;
  });  

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
          <Route path="/genero/:genero" element={<GeneroJuegos />} />
          <Route path="/juegos" element={<VerAllGames/>}/>
          <Route path="/agregarJuegoUsuario" element={<AgregarJuegoUsuario/>} />
          <Route path="/admin" element={usuario?.rol === 'admin' ? <HomeAdmin /> : <Navigate to="/" />} />
        </Routes>
        
        <Footer
          onShowContacto={() => setShowContacto(true)}
          onShowInfo={() => setShowInfo(true)}
          onShowImagen={() => setShowImagen(true)}
        />
        
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
        <ModalContacto
          isOpen={showContacto}
          onClose={() => setShowContacto(false)}
        />
        <ModalInfo
          isOpen={showInfo}
          onClose={() => setShowInfo(false)}
        />
        <ModalImagen
          isOpen={showImagen}
          onClose={() => setShowImagen(false)}
          src={logo}
          alt="TUP Gaming 2025"
        />
      </div>
    </Router>
  );
}

export default App;
