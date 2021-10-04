import SongList from '../someSongs';
import SONGS from '../../../homework';

const Main = () => {
	const songs = SONGS;
	return (
		<main>
			<h2>This Week's Top 10</h2>
			<SongList songs={songs} />
		</main>
	);
};

export default Main;
