import { useState } from "react"
import axios from 'axios';

export default function LoginForm () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const submitHandler = async (e) =>{
        e.preventDefault();
        // username | password => chatengine -> give message
        // works out -> log in
        // error -> try with a new username

        const userAuth = {'Project-Id':"f85db272-3e7b-47d8-8a7d-4c505f04e7b1", 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: userAuth});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError("Wrong Credentials. Please try with another Credentials");
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h2 className="title">Chat Application</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} className="input" required/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="input" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chating</span>
                        </button>
                    </div>
                    <p style={{textAlign:'center', color:'red'}}>{error}</p>
                </form>
            </div>
        </div>
    )
}