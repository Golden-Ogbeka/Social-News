import React from 'react';
import FollowerBlock from '../common/FollowerBlock/FollowerBlock';
import PageHeader from '../common/PageHeader/PageHeader';
import AppLayout from '../layout/AppLayout';

function Mentors() {
	return (
		<AppLayout>
			<PageHeader>Your Mentors</PageHeader>
			<div className="flex flex-row justify-between flex-wrap gap-5">
				<FollowerBlock type="mentor" />
				<FollowerBlock type="mentor" />
				<FollowerBlock type="mentor" />
				<FollowerBlock type="mentor" />
			</div>
		</AppLayout>
	);
}

export default Mentors;
