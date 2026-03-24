import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Chat({ projeto }) {
  const [mensagens, setMensagens] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 Quando seleciona projeto, já chama IA
  useEffect(() => {
    if (!projeto) return;

    analisarProjeto(projeto.id);
  }, [projeto]);

  async function analisarProjeto(id) {
    setLoading(true);

    const res = await fetch(
      `https://gestorback.onrender.com/projetos/analise/${id}`
    );
    const data = await res.json();

    setMensagens([
      {
        tipo: "ia",
        texto: data.analise,
      },
    ]);

    setLoading(false);
  }

  async function analisarGeral() {
    setLoading(true);

    const res = await fetch(
      "https://gestorback.onrender.com/projetos/analise-geral"
    );
    const data = await res.json();

    setMensagens([
      {
        tipo: "ia",
        texto: data.analise,
      },
    ]);

    setLoading(false);
  }

  async function enviarMensagem() {
  if (!input) return;

  const novaMensagem = { tipo: "user", texto: input };

  const novasMensagens = [...mensagens, novaMensagem];
  setMensagens(novasMensagens);

  setLoading(true);

  const res = await fetch("https://gestorback.onrender.com/projetos/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pergunta: input,
      projetoId: projeto?.id || null,
      historico: novasMensagens, // 🔥 ENVIA HISTÓRICO
    }),
  });

  const data = await res.json();

  const respostaIA = {
    tipo: "ia",
    texto: data.resposta,
  };

  setMensagens((prev) => [...prev, respostaIA]);

  setInput("");
  setLoading(false);
}
  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">
          {projeto
            ? `Projeto: ${projeto.nome}`
            : "Assistente de Projetos"}
        </h2>

        {!projeto && (
          <button
            onClick={analisarGeral}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Analisar tudo
          </button>
        )}
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100 dark:bg-gray-800">
        {mensagens.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-2xl max-w-[70%] ${
                m.tipo === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <ReactMarkdown
                components={{
                p: ({ children }) => <p className="mb-2">{children}</p>,
                li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
            }}
            >
                {m.texto}
            </ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="text-gray-400 text-sm">
            IA pensando...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-xl p-2 bg-white dark:bg-gray-800 dark:border-gray-600"
          placeholder="Pergunte algo..."
        />

        <button
          onClick={enviarMensagem}
          className="bg-blue-500 text-white px-4 rounded-xl"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}