export default function TheirMessage({lastMessage, message}){
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {
                isFirstMessageByUser && (
                    <div className="message-avatar"
                    style= {{backgroundImage: `url(${message?.sender?.avatar})`}}
                    />
                )
            }

            { message?.attachments?.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    alt="demo-file"
                    className = "message-image"
                    style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                />
            ) : (
                <div className="message" style={{float:'left', color:'#000', backgroundColor:'#e4e6eb', marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                    {message.text}
                </div>
            )

            }
        </div>
    )
}