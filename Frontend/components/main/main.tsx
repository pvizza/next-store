import Header from '../header/header';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Theme } from '../../theme';

const main = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
      <Header />
      {children}
      </ThemeProvider>
    </div>
  );
};

export default main;
