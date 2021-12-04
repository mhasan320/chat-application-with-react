import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';

export default function InputForm(props){
    const [value, setValue] = useState('');
    const {creds, chatId} = props;

    const submitHandler = (e) => {
        e.preventDefault();

        const text = value.trim();
        if(text.length > 0 ) sendMessage (creds, chatId, { text});
        setValue('');
    }

    const changeHandler = (e) =>{
        setValue(e.target.value);
        isTyping(chatId, props);
    }

    const uploadHandler = (e) => {
        sendMessage(creds, chatId, {files:e.target.files, text:''})
    }
    return(
        <form className="message-form" onSubmit={submitHandler}>
            <input 
                type="text"
                className="message-input"
                placeholder="Send Message"
                onChange={changeHandler}
                value={value}
                onSubmit={submitHandler}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="picture-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{display: 'none'}}
                onChange={uploadHandler}
            />

            <button type="submit" className="send-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="send-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </form>
    )
}