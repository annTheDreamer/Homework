import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="main-navigation">
			<Link to="/" className="navigation-links">
				Home
			</Link>
			<Link to="/about" className="navigation-links">
				About
			</Link>
			<Link to="/posts" className="navigation-links">
				Posts
			</Link>
		</nav>
	);
};

export default Navigation;
