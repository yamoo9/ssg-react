import { darkTheme, useTheme } from 'contexts/theme';
import React from 'react';

export default function Container() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setTheme({
            currentThemeName: 'dark',
            values: darkTheme,
          })
        }
      >
        change theme
      </button>
    </div>
  );
}
