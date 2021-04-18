import React from 'react';
import {
    BoardSquares
} from '../styles/styled-components/StyledSquare';

export function Square(props) {
    return(
        <BoardSquares onClick={ props.onClick }>
            { props.value }
        </BoardSquares>
    )
}