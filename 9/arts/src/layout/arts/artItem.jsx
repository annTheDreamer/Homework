import StyledArtItem from '../../styled-components/StyledArtItem';
import StyledImage from '../../styled-components/StyledImage';

const ArtItem = ({ art }) => {
	return (
		<StyledArtItem>
			<h2>{art.title}</h2>
			<h4>{art.artist}</h4>
			<StyledImage src={art.paintingUrl} alt={art.title} />
		</StyledArtItem>
	);
};

export default ArtItem;
