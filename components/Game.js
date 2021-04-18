import React from 'react';
import { Board } from './Board';
import {
    GameContainer,
    GameBoard
} from '../styles/styled-components/StyledGame';

export function Game() {
    return(
        <GameContainer>
            <GameBoard>
                <Board/>
            </GameBoard>
            <div>
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </GameContainer>
    )
}