import { useState } from "react";

function Square({ value, onSquareClick }) {

    return <button className="w-20 text-white text-5xl shadow-sky-700 shadow-2xl h-20 fortnite-btn  m-2 rounded-sm outline-lime-60 outline fortnite-btn-inner " onClick={onSquareClick}>{value}</button>
}


export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {

        if (squares[i] || calculateWinner(setSquares)) {
            return;
        }
        const nextSquare = squares.slice();
        if (xIsNext) {
            nextSquare[i] = "X";
        }
        else {
            nextSquare[i] = "O";
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return(
    <div className="flex flex-col  justify-center items-center">
        <div>{status}</div>
        <div className="row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="row ">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row ">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    </div>)
}

function calculateWinner(squares) {
    const lines = [
        [0, 1.2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}