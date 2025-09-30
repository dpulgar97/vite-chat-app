import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatContainer from "./components/ChatContainer";
import "./App.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app">
      <button
        className="menu-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
        <Sidebar />
      </div>

      <div className="main-chat">
        <ChatHeader />
        <ChatContainer />
      </div>
    </div>
  );
}
