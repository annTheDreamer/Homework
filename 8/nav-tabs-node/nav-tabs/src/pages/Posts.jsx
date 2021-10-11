import { useState, useEffect } from 'react';
import HeroSectionPosts from '../layout/HeroSectionPosts';
import PostList from '../layout/PostList';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://localhost:8000/navigation/v1/posts')
			.then((response) => response.json())
			.then((info) => setPosts(info.allQuotes))
			.catch((err) => console.log(err));
	}, []);
	return (
		<section>
			<HeroSectionPosts />
			<section>
				<PostList posts={posts} />
			</section>
		</section>
	);
};

export default Posts;
