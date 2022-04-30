import React from 'react';
import NewsPost from '../../common/NewsPost/NewsPost';

function PostResults() {
	return (
		<div className="flex flex-col gap-5">
			<NewsPost />
			<NewsPost />
		</div>
	);
}

export default PostResults;
