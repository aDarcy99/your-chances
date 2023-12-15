import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { colors, createTheme } from '@themerig/core';
//context
import { ThemeProvider } from 'react-jss';
import CurrentCountryProvider from './providers/CurrentCountryProvider';
//components
import CssReset from './components/CssReset/CssReset';
//pages
import IndexPage from './pages/IndexPage.jsx';

const theme = createTheme({
  palette: {
    defaults: {
      background: colors.grey[1],
      text: {
        body: colors.grey[8],
      },
    },
  },
  typography: {
    root: {
      fontSize: 18,
    },
    h1: {
      fontSize: 72,
      fontWeight: '800',
    },
    h2: {
      fontSize: 44,
      fontWeight: '800',
    },
    h3: {
      fontSize: 24,
      fontWeight: '800',
    },
    body1: {
      fontSize: 20,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssReset />
      {/* Note: Using HashRouter because BrowserRouter doesn't work with Github Pages
      (https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages) */}
      <HashRouter>
        <CurrentCountryProvider>
          <Route exact path='/'>
            <IndexPage />
          </Route>
        </CurrentCountryProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#page-content'));
