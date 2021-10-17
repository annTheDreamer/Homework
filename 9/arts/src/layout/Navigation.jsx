import { Link } from 'react-router-dom';
import StyledNavigation from '../styled-components/StyledNavigation';

const Navigation = () => {
	return (
		<StyledNavigation>
			<Link to="/" className="nav-link">Home</Link>
			<Link to="/about" className="nav-link">About</Link>
		</StyledNavigation>
	);
};

export default Navigation;
