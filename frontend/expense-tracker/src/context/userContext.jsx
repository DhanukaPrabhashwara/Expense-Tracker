import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //usr data update function
    const updateUser = (userData) => {
        setUser(userData);
    };

    //user data clear function
    const clearUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser,
            }}
            >
            {children}
            </UserContext.Provider>
    );
}

export default UserProvider;