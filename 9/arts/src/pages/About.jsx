import React from 'react';
import StyledAboutSection from '../styled-components/StyledAboutSection';
import GreatWorks from '../services/greatWorks';

const About = () => {
	return (
		<StyledAboutSection>
			{GreatWorks.map((art) => (
				<React.Fragment>
					<h2>{art.artist}</h2>
					<p>{art.about}</p>
				</React.Fragment>
			))}
		</StyledAboutSection>
	);
};

export default About;
