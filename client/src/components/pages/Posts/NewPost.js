import React from 'react';
import Button from '../../common/Button/Button';
import PageHeader from '../../common/PageHeader/PageHeader';
import TextInput from '../../common/TextInput/TextInput';
import AppLayout from '../../layout/AppLayout';

function NewPost() {
	return (
		<AppLayout>
			<PageHeader>Add Post</PageHeader>
			<form className="flex flex-col gap-5 w-full">
				<TextInput
					placeholder="Post title"
					type="text"
					name="postTitle"
					variant="outline"
					// value={inputValues.email}
					// onChange={e => handleInput(e)}
				/>
				<TextInput
					placeholder="Post subtitle"
					type="text"
					name="postSubtitle"
					variant="outline"
					// value={inputValues.email}
					// onChange={e => handleInput(e)}
				/>
				<TextInput
					placeholder="Post content"
					type="text"
					name="postContent"
					variant="outline"
					multiline
					// value={inputValues.email}
					// onChange={e => handleInput(e)}
				/>
				<Button
					style={{
						alignSelf: 'center',
						marginTop: 20,
					}}
				>
					ADD POST
				</Button>
			</form>
		</AppLayout>
	);
}

export default NewPost;
