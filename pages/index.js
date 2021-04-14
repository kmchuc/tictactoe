import Head from 'next/head'
import {
  HomeContainer,
  SelectBox,
  SelectBoxHeader
} from '../styles/homeStyled.js'

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
      <SelectBox>
        <SelectBoxHeader>Tic Tac Toe</SelectBoxHeader>
        <div>
          <div>Select which symbol you'd like to be:</div>
          <div>
            <button>Player (X)</button>
            <button>Player (O)</button>
          </div>
        </div>
      </SelectBox>
    </HomeContainer>
  )
}
