import React from 'react';
import AppLayout from '../layout/AppLayout';
import NewsPost from '../common/NewsPost/NewsPost';

function NewsStand() {
	return (
		<AppLayout>
			<div className="flex flex-col gap-5">
				<NewsPost />
			</div>
		</AppLayout>
	);
}

export default NewsStand;
