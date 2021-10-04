const SongItem = ({ song }) => {
	return (
		<div className="song-item">
			<section>
				<div className="title">{song.title}</div>
				<div className="artist">{song.artist}</div>
				<img className="photo" src={song.photo} alt={song.id} />
			</section>
		</div>
	);
};

export default SongItem;
