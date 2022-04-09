import React from 'react'
import Item from './Item.js';
import './MovieList.css'
import harry from './src/img/harryPotter.jpg'
import scream from './src/img/scream.jpg'
import matrix from './src/img/matrix.jpg'
import espiritus from './src/img/espiritusOscuros.jpg'
import sing from './src/img/sing2.jpg'
import { MovieListPage, MovieBanner } from './MovieListStyles.js'
import Carousel from 'react-elastic-carousel'

const BreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]


function MovieList() {
  return (
    <MovieListPage>
        <Carousel
        autoPlaySpeed={500}
        autoPlay={true}
        InfiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        className="Carousel" breakpoints={BreakPoints}>
            <Item><MovieBanner img={harry} /></Item>
            <Item><MovieBanner /></Item>
            <Item>tres</Item>
            <Item>cuatro</Item>
            <Item>cinco</Item>
            <Item>seis</Item>
        </Carousel>
    </MovieListPage>
  )
}

export default MovieList