import React from 'react';
import Avatar from '../Avatar/Avatar';
import Text from '../Text/Text';
import CommentBlock from '../CommentBlock/CommentBlock';

function NewsPost() {
	return (
		<div className="w-full shadow-md rounded-[10px] p-5">
			<div className="flex justify-between align-middle mb-10">
				<div className="flex flex-col gap-[10px]">
					<Text
						text="The danger of criminals"
						size={24}
						weight="600"
					/>
					<Text
						text="Why crimes shouldn’t be allowed"
						size={14}
						weight="300"
					/>
					<div className="flex flex-row gap-[52px]">
						<Text text="10.2M views" size={10} weight="300" />
						<Text text="10M comments" size={10} weight="300" />
					</div>
				</div>
				<Avatar />
			</div>
			<div className="mb-[30px]">
				<Text lineHeight="22.5px">
					There can only be a stable state when there is no crime.
					Crime puts fear, despair and anger in the citizens of a
					community thereby making it virutally impossible to conduct
					tasks and therefore affects the economic activities of the
					state. To allow the free flow of state affairs, chrimes must
					be brought to justice as soon as possible and the entire
					public must be educated on its dangers and how to avoid it
				</Text>
			</div>
			<CommentBlock />
		</div>
	);
}

export default NewsPost;
