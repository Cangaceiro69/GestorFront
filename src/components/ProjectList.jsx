import { useEffect, useState } from "react";

export default function ProjectList({ onSelectProjeto }) {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projetos")
      .then((res) => res.json())
      .then((data) => setProjetos(data));
  }, []);

  return (
    <div className="h-full overflow-y-auto p-4 bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Projetos</h2>

      {projetos.map((p) => (
        <div
          key={p.id}
          onClick={() => onSelectProjeto(p)}
          className="border p-4 mb-3 rounded-2xl cursor-pointer hover:bg-gray-100 transition"
        >
          {/* Nome */}
          <h3 className="font-bold text-lg">{p.nome}</h3>

          {/* Tipo */}
          <span
            className={`text-xs px-2 py-1 rounded ${
              p.tipo === "faculdade"
                ? "bg-purple-200 text-purple-700"
                : "bg-blue-200 text-blue-700"
            }`}
          >
            {p.tipo}
          </span>

          {/* Referência */}
          <p className="text-sm text-gray-500 mt-1">{p.referencia}</p>

          {/* Barra de progresso */}
          <div className="mt-3">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${p.progresso}%` }}
              ></div>
            </div>
            <span className="text-xs">{p.progresso}% concluído</span>
          </div>

          {/* Status */}
          <p className="text-xs mt-2 text-gray-400">
            Status: {p.status}
          </p>
        </div>
      ))}
    </div>
  );
}