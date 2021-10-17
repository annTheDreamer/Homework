import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Navigation from '../layout/Navigation';

const ROUTES = [
	{
		component: Home,
		path: '/',
		exact: true,
	},
	{
		component: About,
		path: '/about',
		exact: true,
	},
];

const ApplicationRoutes = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				{ROUTES.map((route, index) => (
					<Route
						component={route.component}
						path={route.path}
						exact={route.exact}
						key={index}
					/>
				))}
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Router>
	);
};

export default ApplicationRoutes;
