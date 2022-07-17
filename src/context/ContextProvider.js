import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    calendar: false,
    kanban: false,
    expenses: false
  };

export const ContextProvider = ({ children }) => {
    const [sidebarActive, setSidebarActive] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider value={{sidebarActive, setSidebarActive, isClicked, setIsClicked, handleClick}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
