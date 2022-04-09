import React from 'react'
import MovieList from './components/MovieList.js';
import { CatalogoFullPage } from './CatalogoStyles.js'
import Banner from './components/Banner.js';

function Catalogo() {
  return (
    <>
      <CatalogoFullPage>
        <Banner />
        <MovieList />
      </CatalogoFullPage>
    </>
  )
}

export default Catalogo
