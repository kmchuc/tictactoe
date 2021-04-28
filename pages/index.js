import Head from 'next/head';
import { Game } from '../components/Game';
import Image from 'next/image';
import {
  HomeContainer,
  LogoDiv
} from '../styles/homeStyled.js';

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Tic-Tac-Toe Game</title>
        <link
        rel='preload'
        href='/fonts/Bright.otf'
        as='font'
        type='font/otf' 
        crossorigin='anonymous'
        />
      </Head>
      <LogoDiv>
        <Image 
        src='/tictactoe-logo.png' 
        alt="logo" 
        width= {400}
        height= {100}
        />
      </LogoDiv>
      <Game />
    </HomeContainer>
  )
}
