import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

function App() {
	return (
		<div className="main-grid-container">
			<Header />
			<main>
				<Main />
			</main>
			<Footer />
		</div>
	);
}

export default App;
