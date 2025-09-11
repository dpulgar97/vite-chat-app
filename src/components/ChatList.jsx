import ChatItem from './ChatItem';

export default function ChatList({ chats, onSelectChat, activeChatId }) {
  return (
    <ul className="chat-list">
      {chats.map(chat => (
        <ChatItem
          key={chat.id}
          name={chat.name}
          lastMessage={chat.lastMessage}
          isActive={chat.id === activeChatId}
          onClick={() => onSelectChat(chat)}
        />
      ))}
    </ul>
  );
}