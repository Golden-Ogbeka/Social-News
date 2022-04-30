import React from 'react';
import FollowerBlock from '../../common/FollowerBlock/FollowerBlock';

function AccountResults() {
	return (
		<div className="flex flex-row justify-between flex-wrap gap-5">
			<FollowerBlock />
			<FollowerBlock />
			<FollowerBlock />
			<FollowerBlock />
		</div>
	);
}

export default AccountResults;
