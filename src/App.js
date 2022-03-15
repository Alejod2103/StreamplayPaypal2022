import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
		<Router>
		 <Route path="/*" exact component={Pricing} />
		</Router>

		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>

				<Route path="/Pricing" exact component={Pricing} />
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/*" exact component={Pricing} />
				
			</Switch>
			<Footer />			
		</Router>

		</>

	);
}

export default App;
