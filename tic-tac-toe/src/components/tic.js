import './tic.css';
import { useState } from 'react';

export default function Tic(){

    const [currentPlayer, setCurrentPlayer] = useState('Player 1');
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);


    const winningCombinations = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // main diagonal
        [2, 4, 6]  // anti diagonal
    ];


    const checkWinner = (newBoard) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                return newBoard[a];
            }
        }
        return null;
    };


    const handleBoxClick = (index) => {
        if (board[index] === null && !winner)  {
            const newBoard = board.slice();
            newBoard[index] = currentPlayer === 'Player 1' ? 'X' : 'O';
            setBoard(newBoard);
            setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');

            
        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner === 'X' ? ' Player 1' : 'Player 2');
            setIsGameOver(true);
        }
            else if (newBoard.every(cell => cell !== null)) {
                setIsGameOver(true); // End the game if all cells are filled
        } else {
            setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
        }
        }



    };


    
    const handleRestartGame = () => {
        setCurrentPlayer('Player 1');
        setBoard(Array(9).fill(null));
        setWinner(null);
        setIsGameOver(false);
    };
    return(
        <>
        <div style={{width:"100vw",backgroundColor:"#001119",height:"100vh"}}>
            <div style={{paddingTop:"15px",paddingLeft:"10px"}}>

           
        <div style={{width:"25%",height:"90vh",border:"1px solid black",borderRadius:"25px",backgroundColor:"#808080",marginBottom:"10px"}}>
            <div style={{textAlign:"center", color:"white"}}>
                <h1>Tic Tac Toe</h1>
                <h2>{winner ? `${winner} Won!` : `${currentPlayer}'s Turn`}</h2>

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
<div className="Box"  onClick={() => handleBoxClick(6)}><h1 >{board[6]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(7)}><h1>{board[7]}</h1></div>
<div className="Box"  onClick={() => handleBoxClick(8)}><h1>{board[8]}</h1></div>
                </div>


                {isGameOver && (
                        <button onClick={handleRestartGame} style={{ marginTop: "20px",marginBottom:"20px", padding: "10px", fontSize: "16px",backgroundColor:"#6E072D",borderRadius:"5px" ,color:'white',paddingLeft:"5%",paddingRight:"5%"}}>
                          <h1 style={{margin:"0"}}>  Restart Game</h1>
                        </button>
                    )}
            </div>

        </div>
        </div>
        </div>
        </>
    )
}