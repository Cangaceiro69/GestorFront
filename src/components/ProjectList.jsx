import { useEffect, useState } from "react";
import FormProjeto from "./FormProjeto";

export default function ProjectList() {
  const [projetos, setProjetos] = useState([]);

  async function buscarProjetos() {
    const res = await fetch("https://gestorback.onrender.com/projetos");
    const data = await res.json();
    setProjetos(data);
  }

  useEffect(() => {
    buscarProjetos();
  }, []);

  return (
    <div className="p-4">

      {/* 🔥 AQUI É A CONEXÃO */}
      <FormProjeto atualizarLista={buscarProjetos} />

      <div className="space-y-4">
        {projetos.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow"
          >
            <h2 className="text-lg font-bold dark:text-white">{p.nome}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{p.referencia}</p>
            <p className="text-sm dark:text-white">{p.status}</p>

            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${p.progresso || 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}