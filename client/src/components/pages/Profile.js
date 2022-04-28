import React from 'react';
import Avatar from '../common/Avatar/Avatar';
import Button from '../common/Button/Button';
import FeaturedPost from '../common/NewsPost/FeaturedPost';
import Text from '../common/Text/Text';
import AppLayout from '../layout/AppLayout';

function Profile() {
	return (
		<AppLayout>
			<div className="flex flex-col items-center">
				<Avatar size={247} />
				<div className="flex flex-row items-center mt-5 gap-[23px] mb-[5px]">
					<div className="flex flex-col gap-[15px] items-center">
						<Text text="Golden Ogbeka" size={36} weight="600" />
						<Text>Creative Director, Writer</Text>
					</div>
					<Button>Follow</Button>
				</div>
				<div className="mt-5 flex flex-row items-center w-full max-w-[500px] flex-wrap justify-between">
					<Text weight="600">23 posts</Text>
					<Text weight="600">15M followers</Text>
					<Text weight="600">1,300 mentors</Text>
				</div>
				<h3 className="mt-[60px] mb-5">
					<Text size={24} weight="600">
						Featured posts
					</Text>
				</h3>
				<div className="flex flex-row justify-between w-full flex-wrap gap-y-5 ">
					<FeaturedPost />
					<FeaturedPost />
					<FeaturedPost />
					<FeaturedPost />
				</div>
			</div>
		</AppLayout>
	);
}

export default Profile;
