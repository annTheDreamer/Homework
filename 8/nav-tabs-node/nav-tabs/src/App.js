import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import NotFound from './pages/404';

function App() {
	return (
		<div className="main-grid-container">
			<Router>
				<Header />
				<main>
					<Switch>
						<Route component={Home} path="/" exact />
						<Route component={About} path="/about" />
						<Route component={Posts} path="/posts" />
						<Route component={NotFound} path="*" />
					</Switch>
				</main>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
