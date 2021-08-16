import React from 'react';
import PropTypes from 'prop-types';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

const ThemeProps = {
    colors: {
        primary: '#ff9000',
        secondary: 'white',
        background: '#28262e',
        gray: '#999591',
        lightgray: '#312e38',
        appointmend: '#3e3b47',
    },
};

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={ThemeProps}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    );
}

Theme.propTypes = {
    children: PropTypes.element.isRequired,
};
