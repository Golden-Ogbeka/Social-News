import React from 'react';
import Avatar from '../Avatar/Avatar';
import MoreIcon from '../Icons/MoreIcon';
import Text from '../Text/Text';
import FollowerMenu from './FollowerMenu';

function FollowerBlock({ type = 'follower' }) {
	return (
		<div className="p-5 shadow-md w-full md:max-w-[48%] lg:max-w-[49%] rounded-[10px]">
			<div className="flex flex-row align-top gap-[10px]">
				<image>
					<Avatar size={54} />
				</image>
				<div className="flex flex-col gap-5 w-full">
					<div className="flex flex-row align-top mb-[14px] justify-between">
						<div className="flex flex-col gap-[5px]">
							<Text text="Golden Ogbeka" size={24} weight="600" />
							<Text
								text="Creative Director, Writer"
								weight="300"
							/>
						</div>
						<div className="relative">
							<FollowerMenu type={type} />
						</div>
					</div>
					<aside className="flex flex-row align-center gap-[30px]">
						<Text text="23 posts" size={14} />
						<Text text="15M followers" size={14} />
						<Text text="1,300 mentors" size={14} />
					</aside>
				</div>
			</div>
		</div>
	);
}

export default FollowerBlock;
