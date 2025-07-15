import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/header.jsx'; 
import Footer from './components/layout/footer/footer.jsx';
import HomeNoLogin from './pages/HomeNoLogin.jsx';
import ModalLogin from './components/ui/modales/LogInModal.jsx';
import ModalSignin from './components/ui/modales/SignInModal.jsx';
import HomeLogueado from './pages/HomeLogueado.jsx';
import ColeccionUsuario from './pages/ColeccionUsuario.jsx';
import GeneroJuegos from './pages/GeneroJuegos.jsx';
import VerAllGames from './pages/VerAllGames.jsx';
import AgregarJuegoUsuario from './pages/AgregarJuegoUsuario.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
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
