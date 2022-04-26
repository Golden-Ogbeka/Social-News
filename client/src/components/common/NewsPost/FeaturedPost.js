import React from 'react';
import Text from '../Text/Text';

function FeaturedPost() {
	return (
		<article className="w-full md:max-w-[30%] lg:max-w-[24%] p-5 shadow-md rounded-[10px] cursor-pointer">
			<h5 className="mb-[10px]">
				<Text weight="600">The danger of criminals</Text>
			</h5>
			<h5 className="mb-10">
				<Text weight="300" size={14}>
					Why crimes shouldn’t be allowed
				</Text>
			</h5>
			<div className="flex flex-row align-middle justify-between flex-wrap gap-2">
				<Text weight="300" size={10}>
					10.2M views
				</Text>
				<Text weight="300" size={10}>
					10M comments
				</Text>
			</div>
		</article>
	);
}

export default FeaturedPost;
