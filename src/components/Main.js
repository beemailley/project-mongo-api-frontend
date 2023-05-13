
import { Documentation } from 'components/Documentation';
import React from 'react';
import { GameList } from './GameList';
import { Footer } from './Footer';
import { Header } from './Header';

export const Main = () => {
  return (
    <section>
      <Header />
      <Documentation />
      <GameList />
      <Footer />
    </section>
  )
}