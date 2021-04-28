import styled from 'styled-components';

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 100%;
    border: 50px solid #6a121e;
`;

export const BoardTitle = styled.div`
    font-size: 4em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ReplayButton = styled.button`
    border: 2px solid #6a121e;
    font-family: 'Bright';
    height: 60%;
    font-size: 30px;
`;

export const BoardSquaresContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 33%;
    width: 100%;
`;