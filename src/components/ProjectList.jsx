import { useEffect, useState } from "react";

export default function ProjectList() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("https://gestorback.onrender.com/projetos")
      .then((res) => res.json())
      .then((data) => setProjetos(data));
  }, []);

  return (
    <div className="p-4 space-y-4">
      {projetos.map((p) => (
        <div
          key={p.id}
          className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow"
        >
          <h2 className="text-lg font-bold">{p.nome}</h2>
          <p className="text-sm text-gray-500">{p.referencia}</p>
          <p className="text-sm">{p.status}</p>

          <div className="w-full bg-gray-200 h-2 rounded mt-2">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${p.progresso}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}