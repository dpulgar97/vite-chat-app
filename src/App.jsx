// src/App.jsx
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import ChatContainer from './components/ChatContainer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-chat">
        <ChatHeader />
        <ChatContainer />
      </div>
    </div>
  );
}