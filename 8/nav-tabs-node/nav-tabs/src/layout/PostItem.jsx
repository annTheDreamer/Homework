const PostItem = ({ post }) => {
	return (
		<div>
			<section className="post-item">
				<div className="title">{post?.id}</div>
				<div className="post-body">{post?.quoteBody}</div>
			</section>
		</div>
	);
};

export default PostItem;
