import { useState } from "react";

export default function FormProjeto() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [referencia, setReferencia] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("em andamento");

  async function criarProjeto() {
    if (!nome) {
      alert("Nome é obrigatório");
      return;
    }

    try {
      const res = await fetch("https://gestorback.onrender.com/projetos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          tipo: tipo || "pessoal", // ✅ ENUM válido
          referencia: referencia || "",
          descricao: descricao || "",
          progresso: 0,
          status: status || "em andamento", // ✅ ENUM válido
          prioridade: 3,
          peso: 1,
          urgente: false,
        }),
      });

      const data = await res.json();
      console.log("Criado:", data);

      alert("Projeto criado com sucesso!");

    } catch (err) {
      console.error(err);
      alert("Erro ao criar projeto");
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full p-2 mb-2 border rounded dark:bg-zinc-800 dark:text-white"
      />

      {/* ✅ SELECT TIPO */}
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="w-full p-2 mb-2 border rounded cursor-pointer dark:bg-zinc-800 dark:text-white"
      >
        <option value="">Selecione o tipo</option>
        <option value="faculdade">Faculdade</option>
        <option value="cliente">Cliente</option>
        <option value="pessoal">Pessoal</option>
      </select>

      <input
        type="text"
        placeholder="Referência"
        value={referencia}
        onChange={(e) => setReferencia(e.target.value)}
        className="w-full p-2 mb-2 border rounded dark:bg-zinc-800 dark:text-white"
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="w-full p-2 mb-2 border rounded dark:bg-zinc-800 dark:text-white"
      />

      {/* ✅ SELECT STATUS */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full p-2 mb-2 border rounded cursor-pointer dark:bg-zinc-800 dark:text-white"
      >
        <option value="em andamento">Em andamento</option>
        <option value="concluido">Concluído</option>
        <option value="travado">Travado</option>
      </select>

      <button
        onClick={criarProjeto}
        className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Criar Projeto
      </button>
    </div>
  );
}