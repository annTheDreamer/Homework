import styled from 'styled-components';
import ApplicationRoutes from './routes';
import StyledFooter from './styled-components/StyledFooter';

const AppContainer = styled.div`
	height: 100%;
`;

function App() {
	return (
		<AppContainer>
			<ApplicationRoutes />
			<StyledFooter>Developed by annTheDreamer</StyledFooter>
		</AppContainer>
	);
}

export default App;
