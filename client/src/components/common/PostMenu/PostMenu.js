import React from 'react';
import HorizontalLine from '../Lines/HorizontalLine';
import PopoverMenu from '../PopoverMenu/PopoverMenu';
import Text from '../Text/Text';

function PostMenu() {
	return (
		<PopoverMenu type="menu">
			<Text weight="600">Edit post</Text>

			<HorizontalLine />
			<Text weight="600">Delete post</Text>
		</PopoverMenu>
	);
}

export default PostMenu;
