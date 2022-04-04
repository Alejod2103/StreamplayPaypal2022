import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


//Pages
import Home from './pages/Home';
import Compatibles from './components/Compatibles/Compatible.js'
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
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
				<Route path="/Compatibles" exact component={Compatibles} />
				<Route path="/*" exact component={Pricing} />
				
			</Switch>
			<Footer />			
		</Router>

		</>

	);
}

export default App;
