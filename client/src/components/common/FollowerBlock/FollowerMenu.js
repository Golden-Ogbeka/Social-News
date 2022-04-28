import React from 'react';
import HorizontalLine from '../Lines/HorizontalLine';
import PopoverMenu from '../PopoverMenu/PopoverMenu';
import Text from '../Text/Text';

function FollowerMenu({ type }) {
	return (
		<PopoverMenu type="menu">
			{type === 'follower' ? (
				<Text weight="600">Follow back</Text>
			) : (
				<Text weight="600">Unfollow</Text>
			)}
			<HorizontalLine />
			<Text weight="600">Block user</Text>
		</PopoverMenu>
	);
}

export default FollowerMenu;
