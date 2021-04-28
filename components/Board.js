import React, { useState } from 'react';
import { Square } from './Square';

import {
    BoardContainer,
    BoardTitle,
    BoardSquaresContainer,
    ReplayButton
} from '../styles/styled-components/StyledBoard';


export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [win, setWin] = useState(false);
    const [tie, setTie] = useState(false);

    const handleClick = (i) => {
        const squaresClone = squares.slice();
        if (squares[i] !== null) {
            return;
        }

        squaresClone[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresClone);
        setXIsNext(!xIsNext);
    }

    const restart = () => {
        return <Restart
        onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
        }}
        />
    };

    const renderSquare = (i) => {
        return <Square
        value={squares[i]}
        onClick={() => {
        handleClick(i) 
        }}
        />;
    }

    let status;
    const winner = calculateWinner(squares);
    if (winner) {
        status = 'winner is: ' + winner;
        
    } else {
        status = 'next player: ' + (xIsNext ? 'X' : 'O');
    }

    return(
        <BoardContainer>
            <BoardTitle>{status} {restart()}</BoardTitle>
            <BoardSquaresContainer>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </BoardSquaresContainer>
            <BoardSquaresContainer>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </BoardSquaresContainer>
            <BoardSquaresContainer>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </BoardSquaresContainer>
        </BoardContainer>
    )
}

function Restart({ onClick }) {
    return(
        <ReplayButton onClick={onClick}>restart</ReplayButton>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i=0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            return squares[a];
        }
    }
    return null;
}