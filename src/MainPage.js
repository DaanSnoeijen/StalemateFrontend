import { useState } from 'react';
import ChessBoard from './ChessBoard';
import GameMenu from './GameMenu';
import LoggedIn from './LoggedIn';

const MainPage = () => {

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