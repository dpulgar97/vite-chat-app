// src/components/Sidebar.jsx
import ChatList from "./ChatList";
import { useState } from "react";

export default function Sidebar() {
  // Datos simulados (más adelante vendrán del servidor o socket)
  const chats = [
    { id: 1, name: "Ana", lastMessage: "Hola, ¿cómo estás?" },
    { id: 2, name: "Carlos", lastMessage: "¿Vamos al cine?" },
    { id: 3, name: "Equipo Dev", lastMessage: "Revisen el PR #45" },
    { id: 4, name: "Ana", lastMessage: "Hola, ¿cómo estás?" },
    { id: 5, name: "Carlos", lastMessage: "¿Vamos al cine?" },
    { id: 6, name: "Equipo Dev", lastMessage: "Revisen el PR #45" },
    { id: 7, name: "Ana", lastMessage: "Hola, ¿cómo estás?" },
    { id: 8, name: "Carlos", lastMessage: "¿Vamos al cine?" },
    { id: 9, name: "Equipo Dev", lastMessage: "Revisen el PR #45" },
  ];

  const [activeChatId, setActiveChatId] = useState(1); // Chat seleccionado

  const handleSelectChat = (chat) => {
    setActiveChatId(chat.id);
    // Aquí podrías emitir un evento con socket o actualizar estado global
    console.log("Chat seleccionado:", chat.name);
  };

  return (
    <div className="sidebar">
      <h2>Chats</h2>
      <div className="search-container">
        <input
        id="search"
        type="text"
        placeholder="Buscar..."
        className="chat-search"
        >   
        </input>
      </div>
      <ChatList
        chats={chats}
        onSelectChat={handleSelectChat}
        activeChatId={activeChatId}
      />
    </div>
  );
}
