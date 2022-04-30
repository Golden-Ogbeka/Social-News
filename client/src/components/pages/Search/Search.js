import React from 'react';
import SecondaryHeader from '../../common/PageHeader/SecondaryHeader';
import TextInput from '../../common/TextInput/TextInput';
import AppLayout from '../../layout/AppLayout';
import AccountResults from './AccountResults';
import PostResults from './PostResults';
import TabNav from './TabNav/TabNav';

function Search() {
	const [currentTab, setCurrentTab] = React.useState('Accounts');

	const changeTab = value => {
		return setCurrentTab(value);
	};
	return (
		<AppLayout>
			<TextInput
				type="text"
				name="searchInput"
				placeholder="Search for writers or posts"
				style={{
					marginBottom: 60,
				}}
				variant="outline"
				endIcon
				iconType="search"
			/>
			<SecondaryHeader
				style={{
					marginBottom: 51,
				}}
			>
				Results: 26
			</SecondaryHeader>
			<TabNav
				changeTab={changeTab}
				currentTab={currentTab}
				tabs={['Accounts', 'Posts']}
			/>
			{currentTab === 'Accounts' && <AccountResults />}
			{currentTab === 'Posts' && <PostResults />}
		</AppLayout>
	);
}

export default Search;
