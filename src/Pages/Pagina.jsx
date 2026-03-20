import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import Chat from "../components/Chat";

export default function Pagina() {
  const [dark, setDark] = useState(false);

  // 🔥 carregar tema salvo
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 🔥 alternar tema
  const toggleTema = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    }

    setDark(!dark);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 text-black dark:text-white">

      {/* Botão tema */}
      <button
        onClick={toggleTema}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
      >
        {dark ? "☀️" : "🌙"}
      </button>

      {/* Chat */}
      <div className="md:w-2/3 h-1/2 md:h-full border-b md:border-b-0 md:border-r dark:border-gray-700">
        <Chat />
      </div>

      {/* Projetos */}
      <div className="md:w-1/3 h-1/2 md:h-full">
        <ProjectList />
      </div>

    </div>
  );
}