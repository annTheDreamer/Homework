const PostItem = ({ post }) => {
	return (
		<div>
			<section className="post-item">
				<div className="title">{post.title}</div>
				<div className="post-body">{post.body}</div>
			</section>
		</div>
	);
};

export default PostItem;
