"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Usuario {
  email: string;
  senha: string;
}

const Login = () => {
  const [mensagem, setMensagem] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigate = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    if (user) {
      navigate.push("/");
    }

    const chamadaApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setUsuarios(data);
      } catch {
        setMensagem("Falha ao carregar os dados.");
      }
    };

    chamadaApi();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      sessionStorage.setItem("usuario", JSON.stringify(usuario));

      setMensagem("Login realizado com sucesso.");
      setTimeout(() => {
        navigate.push("/");
      }, 2000);
    } else {
      setMensagem("Credenciais inválidas.");
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };

  return (
    <div className="wrapper">
      <h2 className="login_h2">Bem-vindo!</h2>
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="email"
          id="idEmail"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
        />
        <input
          type="password"
          id="idSenha"
          name="senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" className="b_login">Entrar</button>
        <p>
          Não tem uma conta?
          <Link href="/cadastro" className="link_cadastro">Cadastre-se</Link>
        </p>
      </form>
      <p id="mensagem" className={mensagem.includes('sucesso') ? 'sucesso' : 'erro'}>{mensagem}</p>
    </div>
  );
};

export default Login;
