import React from 'react';

export const UserContext = React.createContext(null);

function UserProvider({ children }) {
	const [user, setUser] = React.useState({});

	const addUser = user => {
		setUser(user);
	};

	const removeUser = () => {
		setUser({});
	};

	return (
		<UserContext.Provider value={{ addUser, removeUser, user }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
