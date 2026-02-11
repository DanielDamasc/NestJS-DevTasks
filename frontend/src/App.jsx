import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Rota Inicial (Login) */}
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Qualquer outra rota redireciona para o login */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
