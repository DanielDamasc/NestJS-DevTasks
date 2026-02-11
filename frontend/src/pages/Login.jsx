import React from 'react';
import { useState } from 'react';
import Button from '../components/Button/index.jsx';
import Input from '../components/Input/index.jsx';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.png';

const Login = () => {
    // Estados para controlar as variáveis.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate(); // hook de navegação entre páginas.

    return (
    // Container principal: Centraliza tudo na tela (h-screen = altura total)
    <div className="min-h-screen flex">

      {/* Metade Esquerda */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12">

        {/* Card de Login */}
        <div className="max-w-lg w-full p-8">
          
          {/* Cabeçalho */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-start mb-4">Acesse sua conta</h1>
            <p className="text-sm text-gray-600 mt-2 text-start">
              Digite suas credenciais para continuar
            </p>
          </div>

          {/* Formulário */}
          <form>

            <Input
              label="E-mail"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Senha"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Botão com estado de carregamento */}
            <div className="mt-6 max-w-32">
              <Button type="submit" isLoading={isLoading}>
                Entrar
              </Button>
            </div>

          </form>
        </div>

      </div>

      {/* Metade Direita (Imagem) */}
      <div className="hidden md:block md:w-1/2 relative">
        <img 
          src={loginImg} 
          alt="Imagem de fundo do login"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </div>
  );
}

export default Login;