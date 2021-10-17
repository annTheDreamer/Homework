import styled from 'styled-components';

const StyledArtItem = styled.section`
	height: 400px;
	width: 400px;
	border: 2px solid blueviolet;
	border-radius: 10%;
	justify-content: center;
	justify-self: center;
	align-items: center;
	text-align: center;
	background-color: rgba(250, 242, 242, 0.5);
	& h2 {
		text-decoration: underline;
		margin: 0;
		padding: 0.5rem;
	}
	& h4 {
		margin: 0;
		padding: 0.5rem;
		font-style: italic;
	}
`;

export default StyledArtItem;
