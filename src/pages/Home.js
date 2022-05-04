import React from 'react';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Compatible from '../components/Compatibles/Compatible.js';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import { ContentAdvise } from '../components/Content/Contents/Contentadvise';
import Contenttwo from '../components/Content/Contents/ContentTwo';

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
			<Compatible />
		</>
	);
};

export default Home;
