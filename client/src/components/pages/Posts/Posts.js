import React from 'react';
import Button from '../../common/Button/Button';
import NewsPost from '../../common/NewsPost/NewsPost';
import PageHeader from '../../common/PageHeader/PageHeader';
import AppLayout from '../../layout/AppLayout';
import { useHistory } from 'react-router-dom';

function Posts() {
	const history = useHistory();
	return (
		<AppLayout>
			<div className="flex flex-row w-full items-center justify-between">
				<PageHeader>Your Posts</PageHeader>
				<Button onClick={() => history.push('/posts/new')}>
					Add new post
				</Button>
			</div>
			<div className="flex flex-col gap-10">
				<NewsPost />
				<NewsPost isOwner />
			</div>
		</AppLayout>
	);
}

export default Posts;
