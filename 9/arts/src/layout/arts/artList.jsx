import StyledArtList from '../../styled-components/StyledArtList';
import ArtItem from './artItem';

const ArtList = ({ arts }) => {
	return (
		<StyledArtList>
			{arts.map((art, index) => (
				<ArtItem art={art} key={index} />
			))}
		</StyledArtList>
	);
};

export default ArtList;
