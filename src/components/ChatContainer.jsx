export default function ChatContainer() {
  return (
    <div className="chat-container">
      <div className="messages">
        <p>Hola! 👋</p>
        <p>¿Cómo estás?</p>
      </div>
      <div className="input-area">
        <input type="text" placeholder="Escribe un mensaje..." />
        <button>Enviar</button>
      </div>
    </div>
  );
}