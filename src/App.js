import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


//Pages
import Home from './pages/Home';
import Compatibles from './components/Compatibles/Compatible.js'
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import CatalogoPage from './pages/CatalogoPage.js';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
		

		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>


				<Route path="/Pricing" exact component={Pricing} />
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/Catalogo" exact component={CatalogoPage} />
				<Route path="/Compatibles" exact component={Compatibles} />
				
			</Switch>
			<Footer />			
		</Router>

		</>

	);
}

export default App;
