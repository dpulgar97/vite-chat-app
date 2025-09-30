// components/Sidebar.jsx
import ChatList from "./ChatList";
import SidebarFooter from "./SidebarFooter"; // 👈 nuevo
import { useState } from "react";

export default function Sidebar() {
  const chats = [
    { id: 1, name: "Ana", lastMessage: "Hola, ¿cómo estás?" },
    { id: 2, name: "Carlos", lastMessage: "¿Vamos al cine?" },
    { id: 3, name: "Equipo Dev", lastMessage: "Revisen el PR #45" },
    // ... (tus datos)
  ];

  const [activeChatId, setActiveChatId] = useState(1);

  const handleSelectChat = (chat) => {
    setActiveChatId(chat.id);
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
        />
      </div>
      <div className="chat-list-container">
        <ChatList
          chats={chats}
          onSelectChat={handleSelectChat}
          activeChatId={activeChatId}
        />
      </div>
      <SidebarFooter />
    </div>
  );
}
