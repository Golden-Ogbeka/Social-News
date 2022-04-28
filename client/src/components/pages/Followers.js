import React from 'react';
import FollowerBlock from '../common/FollowerBlock/FollowerBlock';
import PageHeader from '../common/PageHeader/PageHeader';
import AppLayout from '../layout/AppLayout';

function Followers() {
	return (
		<AppLayout>
			<PageHeader>Your followers</PageHeader>
			<div className="flex flex-row justify-between flex-wrap gap-5">
				<FollowerBlock type="follower" />
				<FollowerBlock type="follower" />
				<FollowerBlock type="follower" />
				<FollowerBlock type="follower" />
			</div>
		</AppLayout>
	);
}

export default Followers;
