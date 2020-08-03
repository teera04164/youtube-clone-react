import React, { createContext, useReducer } from 'react';

const initialState = {
    data: []
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_DATA':
                const newState = action.playload
                // console.log("StateProvider -> newState", newState)
                return newState;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }