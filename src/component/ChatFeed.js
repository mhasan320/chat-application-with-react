import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import InputForm from "./InputForm";

export default function ChatFeed (props) {
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];

    const readReceiptsItem = (message, isMyMessage) =>{
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className ="read-receipt"
                style={{
                    float: isMyMessage ? 'right': 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }
    const renderMessage = () => {
        const keys =Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`meg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="recipet-message" style={{marginRight: isMyMessage ? '10px' : '0px', marginLeft: isMyMessage ? '0px': '60px'}}>
                        {readReceiptsItem(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }
    renderMessage();

    if(!chat) return "Loading....";
    return (

        <div className="chat-feed">
            <div className="chat-title-container">
                <h1 className="chat-title">{chat.title}</h1>
                <h2 className="chat-subtitle">
                    {
                        chat.people.map((person) => `${person.person.username}`)
                    }
                </h2>
                {renderMessage()}
                <div style={{height:'80px'}}></div>
                <div className="message-form-container">
                    <InputForm {...props} chatId={activeChat}/>
                </div>
            </div>
        </div>
    );
}