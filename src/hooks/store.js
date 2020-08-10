import React, { createContext, useReducer } from 'react';

const initialState = {
    search: [],
    relate: [],
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_DATA': return { ...state, search: action.playload }
            case 'ADD_RELATE': return { ...state, relate: action.playload }
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }