const ChessBoard = () => {
    return ( 
        <table className="chess-board">
            <tbody>
                <tr>
                    <th>8</th>
                    <td class="light">♜</td>
                    <td class="dark">♞</td>
                    <td class="light">♝</td>
                    <td class="dark">♛</td>
                    <td class="light">♚</td>
                    <td class="dark">♝</td>
                    <td class="light">♞</td>
                    <td class="dark">♜</td>
                </tr>
                <tr>
                    <th>7</th>
                    <td class="dark">♟</td>
                    <td class="light">♟</td>
                    <td class="dark">♟</td>
                    <td class="light">♟</td>
                    <td class="dark">♟</td>
                    <td class="light">♟</td>
                    <td class="dark">♟</td>
                    <td class="light">♟</td>
                </tr>
                <tr>
                    <th>6</th>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td class="light">♙</td>
                    <td class="dark">♙</td>
                    <td class="light">♙</td>
                    <td class="dark">♙</td>
                    <td class="light">♙</td>
                    <td class="dark">♙</td>
                    <td class="light">♙</td>
                    <td class="dark">♙</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td class="dark">♖</td>
                    <td class="light">♘</td>
                    <td class="dark">♗</td>
                    <td class="light">♕</td>
                    <td class="dark">♔</td>
                    <td class="light">♗</td>
                    <td class="dark">♘</td>
                    <td class="light">♖</td>
                </tr>
                <tr>
                    <th></th>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th>e</th>
                    <th>f</th>
                    <th>g</th>
                    <th>h</th>
                </tr>
            </tbody>
        </table>
     );
}
 
export default ChessBoard;
