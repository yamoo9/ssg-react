import React from 'react';

// 로그인 사용자 (인증, 권한)
// 로그인 메서드
// 로그아웃 메서드

const AuthContext = React.createContext();

const initialState = null;

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    case 'SIGN_OUT':
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const authInfo = React.useMemo(
    () => ({
      currentUser: state,
      signIn(userInfo) {
        dispatch({ type: 'SIGN_IN', payload: userInfo });
      },
      signOut() {
        dispatch({ type: 'SIGN_OUT' });
      },
    }),
    [state]
  );

  return <AuthContext.Provider value={authInfo} {...props} />;
};

export const useAuth = () => {
  const authInfo = React.useContext(AuthContext);
  if (!authInfo) {
    throw new Error('....');
  }

  return authInfo;
};
