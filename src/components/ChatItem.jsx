export default function ChatItem({ name, lastMessage, isActive, onClick }) {
  return (
    <li className={`chat-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="chat-info">
        <h4>{name}</h4>
        <p>{lastMessage}</p>
      </div>
      <div className="chat-indicator">
      </div>
    </li>
  );
}
