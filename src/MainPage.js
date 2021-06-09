import { useState } from 'react';
import ChessBoard from './ChessBoard';
import GameMenu from './GameMenu';
import LoggedIn from './LoggedIn';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:8000');

const MainPage = () => {

    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data);
        console.log(dataFromServer);
        alert("Uw account is gedelete. Hierdoor bent u uitgelogd");

        setUsername("");
        setElo("");
    }

    const [username, setUsername] = useState();
    const [elo, setElo] = useState();

    const parentFunction = (Username, Elo) => {
        setUsername(Username);
        setElo(Elo);
    }

    return ( 
        <div className="main-page">
            <h1>Stalemate</h1>
            <ChessBoard />
            <a href="https://jsfiddle.net/q76uzxwe/1/">Real chess ai</a>
            <div className="game-menu">
                <GameMenu functionCallFromParent={parentFunction.bind(this)} />
            </div>
            <div className="logged-in">
                <LoggedIn Username={username} Elo={elo} />
            </div>
        </div>
     );
}
 
export default MainPage;