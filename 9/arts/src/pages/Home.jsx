import StyledHomeSection from '../styled-components/StyledHomeSection';
import GreatWorks from '../services/greatWorks';
import ArtList from '../layout/arts/artList';

const Home = () => {
	const arts = GreatWorks;
	return (
		<StyledHomeSection>
			<ArtList arts={arts} />
		</StyledHomeSection>
	);
};

export default Home;
