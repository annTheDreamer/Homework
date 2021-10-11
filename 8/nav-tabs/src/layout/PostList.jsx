import PostItem from './PostItem';

const PostList = ({ posts }) => {
	return (
		<section className="post-container">
			{posts.map((post, index) => (
				<PostItem post={post} key={index} />
			))}
		</section>
	);
};

export default PostList;
