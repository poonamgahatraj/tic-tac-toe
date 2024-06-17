import './tic.css';
import { useState } from 'react';

export default function Tic(){

    const [currentPlayer, setCurrentPlayer] = useState(' 1');
    const [board, setBoard] = useState(Array(9).fill(null));


    const handleBoxClick = (index) => {
        if (board[index] === null) {
            const newBoard = board.slice();
            newBoard[index] = currentPlayer === ' 1' ? 'X' : 'O';
            setBoard(newBoard);
            setCurrentPlayer(currentPlayer === ' 1' ? ' 2' : ' 1');
        }
    };
    return(
        <>
        <div style={{width:"25%",border:"1px solid black",borderRadius:"5px",backgroundColor:"#808080"}}>
            <div style={{textAlign:"center", color:"white"}}>
                <h1>Tic Tac Toe</h1>
                <h2>Player {currentPlayer} turn</h2>

                <div  style={{display:"flex",justifyContent:'space-around',marginBottom:"10px"}}>
<div className="Box"  onClick={() => handleBoxClick(0)}><h1>{board[0]}</h1></div>
<div className="Box" onClick={() => handleBoxClick(1)}><h1>{board[1]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(2)}><h1>{board[2]}</h1></div>
                </div>

                <div  style={{display:"flex",justifyContent:'space-around',marginBottom:"10px"}}>
<div className="Box"  onClick={() => handleBoxClick(3)}><h1>{board[3]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(4)}><h1>{board[4]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(5)}><h1>{board[5]}</h1></div>
                </div>

                <div  style={{display:"flex",justifyContent:'space-around',marginBottom:"10px"}}>
<div className="Box"  onClick={() => handleBoxClick(6)}><h1>{board[6]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(7)}><h1>{board[7]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(8)}><h1>{board[8]}</h1></div>
                </div>
            </div>

        </div>
        </>
    )
}