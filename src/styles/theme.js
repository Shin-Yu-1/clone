export const lightTheme = {
  breakpoints: {
    small: '768px',
    medium: '992px',
    large: '1200px',
  },
  colors: {
    text: '#2b2b2b',
    background: '#fefefe',
    main: '#f9ca24',
    sub: '#f0932b',
    point: '#eb4d4b',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.color,
    text: '#fefefe',
    background: '#2b2b2b',
  },
};
