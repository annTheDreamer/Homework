import styled from 'styled-components';

const StyledAboutSection = styled.section`
	color: #212121;
	background-image: url('https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2021_lead_image-10.jpg');
	height: 100%;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	& h2 {
		margin: 0;
		padding: 1rem;
		text-indent: 3rem;
		text-shadow: 2px 2px 5px black;
		color: antiquewhite;
	}
	& p {
		padding: 1rem;
		box-shadow: 1px 1px 3px 3px pink;
		background-color: rgb(250, 235, 215, 0.2);
		display: table;
		margin: 0 4rem;
		border-radius: 50px;
		color: white;
		text-shadow: 3px 3px 3px black;
	}
`;

export default StyledAboutSection;
