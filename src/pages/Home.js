import React from 'react';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Contenttwo from '../components/Content/Contents/ContentTwo';
import Compatibles from './Compatibles';
import Contentthree from '../components/Content/Contents/ContentThree.js';
// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Contenttwo />
			<Contentthree />
			<Compatibles />
		</>
	);
};

export default Home;
