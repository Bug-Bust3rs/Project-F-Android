import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
};

export const AuthContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');
        if (userString) {
          const user = JSON.parse(userString);
          dispatch({ type: 'LOGIN', payload: user });
          console.warn("userString ",userString);
        }
      } catch (error) {
        console.error('Failed to load user from AsyncStorage', error);
      }
    };

    loadUser();
  }, []);

  console.log('Auth Context State : ', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
