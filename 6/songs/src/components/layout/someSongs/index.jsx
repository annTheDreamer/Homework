import SongItem from './songItem';

const SongList = ({ songs }) => {
	return (
		<section className="song-container">
			{songs.map((song, index) => (
				<SongItem song={song} key={index} />
			))}
		</section>
	);
};

export default SongList;
