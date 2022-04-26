import React from 'react';
import Carousels from './Carousels.js';
import CarouselTrd from './CarouselsSection/CarouselTrd.js';
import { MovieListPage } from './MovieListStyles.js'

function MovieList() {
  return (
    <MovieListPage>
      <Carousels />
      <CarouselTrd />
    </MovieListPage>
  )
}

export default MovieList