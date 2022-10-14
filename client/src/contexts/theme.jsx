import React, { createContext, useState, useMemo, useContext } from 'react';

// 테마 관리
const tokens = {
  colors: {
    white: '#fff',
    black: '#000',
    red: {
      100: '#f9d0d0',
      200: '#f3a1a1',
      300: '#ed7272',
      400: '#e64343',
      500: '#e01515',
      600: '#b31010',
      700: '#870c0c',
      800: '#5a0808',
      900: '#2d0404',
    },
  },
};

export const lightTheme = {
  forground: tokens.colors.white,
  background: tokens.colors.black,
  primary: tokens.colors.red,
  secondary: {},
};

export const darkTheme = {
  forground: tokens.colors.black,
  background: tokens.colors.white,
  primary: {},
  secondary: tokens.colors.red,
};

const theme = {
  currentThemeName: 'light',
  values: lightTheme,
};

// 컨텍스트 객체
const ThemeContext = createContext();

// 공급자(Provider) 값 공급
// 공급자 래퍼 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(theme);

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          theme: themeValue,
          setTheme: setThemeValue,
        }),
        [themeValue]
      )}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// [ render props pattern, contextType ] 수요자(Consumer) 값 수급

// 커스텀 훅
export const useTheme = () => {
  const themeValue = useContext(ThemeContext);
  if (!themeValue) {
    throw new Error(
      'useTheme 훅은 ThemeProvider 내부에서만 호출할 수 있습니다.'
    );
  }
  return themeValue;
};

// 커스텀 고차 컴포넌트
export const withTheme = (Component) => {
  // 재사용할 로직을 추가한 새로운 향상된 컴포넌트 반환
  return class ThemeHOC extends React.Component {
    static contextType = ThemeContext;

    render() {
      return (
        <Component context={this.context}>{this.props.children}</Component>
      );
    }
  };
};
