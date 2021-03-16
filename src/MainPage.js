import ChessBoard from './ChessBoard';
import GameMenu from './GameMenu';

const MainPage = () => {
    return ( 
        <div className="main-page">
            <h1>Stalemate</h1>
            <ChessBoard />
            <div className="game-menu">
                <GameMenu />
            </div>
        </div>
     );
}
 
export default MainPage;