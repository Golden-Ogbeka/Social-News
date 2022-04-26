import React from 'react';
import Text from '../Text/Text';
import TextInput from '../TextInput/TextInput';
import Comment from './Comment/Comment';

function CommentBlock() {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row justify-between align-middle">
				<Text text="Comments" weight="600" lineHeight={'22.5px'} />
				<TextInput
					placeholder="Type your comment"
					style={{
						maxWidth: '350px',
					}}
					mode="outline"
				/>
			</div>
			<div className="flex flex-col gap-5 w-full rounded-[10px] shadow-md p-5 max-h-[290px] overflow-auto scrollbar">
				<Comment
					comment="I totally agree. Injustice must not be allowed to prevail by any means. Those who are perpetrators must be duly punished and taken out of the scene immediately"
					name="Golden Ogbeka"
				/>
				<Comment
					comment="I totally agree. Injustice must not be allowed to prevail by any means. Those who are perpetrators must be duly punished and taken out of the scene immediately"
					name="Golden Ogbeka"
				/>
				<Comment
					comment="I totally agree. Injustice must not be allowed to prevail by any means. Those who are perpetrators must be duly punished and taken out of the scene immediately"
					name="Golden Ogbeka"
				/>
				<Comment
					comment="I totally agree. Injustice must not be allowed to prevail by any means. Those who are perpetrators must be duly punished and taken out of the scene immediately"
					name="Golden Ogbeka"
				/>
				<Comment
					comment="I totally agree. Injustice must not be allowed to prevail by any means. Those who are perpetrators must be duly punished and taken out of the scene immediately"
					name="Golden Ogbeka"
				/>
			</div>
		</div>
	);
}

export default CommentBlock;
