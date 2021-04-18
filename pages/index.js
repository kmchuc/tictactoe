import Head from 'next/head';
import { Game } from '../components/Game';
import {
  HomeContainer,
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
        crossOrigin=''
        />
      </Head>
      <Game />
    </HomeContainer>
  )
}
