import React from 'react';
import { useState } from 'react';
import Button from '../components/Button/index.jsx';
import Input from '../components/Input/index.jsx';
import { Link } from 'react-router-dom';
import loginImg from '../assets/login.png';

const Register = () => {
    // Estados para controlar as variáveis.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
    // Container principal: Centraliza tudo na tela (h-screen = altura total)
    <div className="min-h-screen flex">

      {/* Metade Esquerda */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12">

        {/* Card de Registro */}
        <div className="max-w-lg w-full p-8">
          
          {/* Cabeçalho */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-start mb-4">Crie sua conta</h1>
            <p className="text-sm text-gray-600 mt-2 text-start">
              Digite seus dados para começar
            </p>
          </div>

          {/* Formulário */}
          <form className='mb-4'>

            <Input
              label="Nome Completo"
              type="text"
              placeholder="Digite seu nome..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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

            <Input
              label="Confirme sua Senha"
              type="password"
              placeholder="******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Botão com estado de carregamento */}
            <div className="mt-6">
              <Button type="submit" isLoading={isLoading}>
                Registrar
              </Button>
            </div>

          </form>

          <div className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link 
              to="/" 
              className="text-blue-500 font-semibold hover:underline"
            >
              Log in
            </Link>
          </div>

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

export default Register;