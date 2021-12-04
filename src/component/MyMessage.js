export default function MyMessage({message}){
    if(message?.attachments?.length > 0){
        return (
            <img 
                src={message.attachments[0].file}
                alt="demo-alt"
                className = "message-image"
                style = {{float: 'right'}}
            />
        )
    }
    return (
       <div className="message" style={{marginRight: '18px', color: '#fff', float:'right', backgroundColor:'#0084ff'}}>
           {message.text}
       </div>
    )
}