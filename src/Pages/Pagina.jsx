import Chat from "../components/Chat";
import Lista from "../components/ProjectList"

export default function Pagina() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-3 dark:bg-gray-900">
      
      {/* 🔵 CHAT (ESQUERDA) */}
      <div className="lg:col-span-2 border-r border-zinc-700 flex flex-col">
        <Chat />
      </div>

      {/* 🟣 PROJETOS (DIREITA) */}
      <div className="p-4 overflow-y-auto">
        <Lista />
      </div>      
    </div>
  );
}