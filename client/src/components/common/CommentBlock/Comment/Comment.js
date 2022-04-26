import React from 'react';
import Avatar from '../../Avatar/Avatar';
import Text from '../../Text/Text';

function Comment({
	comment = '',
	image = 'https://picsum.photos/100',
	name = '',
}) {
	return (
		<article className="flex flex-col gap-[5px] w-full">
			<Text text={comment} size={14} weight={'300'} />
			<div className="flex flex-row gap-[5px] align-middle">
				<Avatar src={image} size={20} />
				<Text text={name} size={12} weight={'300'} />
			</div>
		</article>
	);
}

export default Comment;
