"use client";
import { TipoCadastro } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Cadastro() {
    const [mensagemCadastro, setMensagemCadastro] = useState('');
    const router = useRouter();
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        id_usuario: 0,
        nome: "",
        email: "",
        cpf: "",
        senha: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            if (response.ok) {
                setCadastro({
                    id_usuario: 0,
                    nome: "",
                    email: "",
                    cpf: "",
                    senha: "",
                });
                setMensagemCadastro("Usuário cadastrado com sucesso!");
                router.push("/login");
            } else {
                const errorText = await response.text();
                const errorMessage = errorText ? JSON.parse(errorText).message : "Erro desconhecido.";

                // Tratamento específico para ORA-00001
                if (errorMessage.includes("ORA-00001")) {
                    setMensagemCadastro("Erro ao cadastrar: Usuário já cadastrado.");
                } else {
                    setMensagemCadastro(`Erro ao cadastrar usuário: ${errorMessage}`);
                }
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            setMensagemCadastro(`Erro ao cadastrar usuário: ${error instanceof Error ? error.message : 'Erro no frontend.'}`);
        }
    };

    return (
        <div className="cadastro-page">
            <h2 className="cadastro_h2">Cadastro</h2>
            <form onSubmit={handleSubmit} className="input-area">
                <label htmlFor="idNm"></label>
                <input
                    type="text"
                    id="idNm"
                    name="nome"
                    placeholder="Nome completo"
                    value={cadastro.nome}
                    onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
                    required
                    title="Informe seu nome completo."
                />

                <label htmlFor="idEmail"></label>
                <input
                    type="email"
                    id="idEmail"
                    name="email"
                    placeholder="Email"
                    value={cadastro.email}
                    onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                    title="Informe um email válido, por exemplo: usuario@dominio.com."
                />

                <label htmlFor="idCpf"></label>
                <input
                    type="text"
                    id="idCpf"
                    name="cpf"
                    placeholder="CPF"
                    value={cadastro.cpf}
                    onChange={(e) => setCadastro({ ...cadastro, cpf: e.target.value })}
                    required
                    pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                    title="Informe seu CPF no formato XXX.XXX.XXX-XX ou apenas números."
                />

                <label htmlFor="idSenha"></label>
                <input
                    type="password"
                    id="idSenha"
                    name="senha"
                    placeholder="Senha"
                    value={cadastro.senha}
                    onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
                    required
                    pattern=".{8,}"
                    title="A senha deve ter no mínimo 8 caracteres."
                />

                <button type="submit" className="b_cadastro">Cadastrar</button>
                <p className="login">
                    Já tem uma conta? <Link href="/login" className="f_login">Faça login</Link>
                </p>
            </form>
            <p id="mensagemCadastro" className={mensagemCadastro.includes('sucesso') ? 'sucesso' : 'erro'}>
                {mensagemCadastro}
            </p>
        </div>
    );
}
