import React, { createContext, useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './Nav';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Router from '../Navigator';
import Main from './Main';
import Footer from './Footer';
import configureContainer from '../Container';
import ContainerProvider from "./ContainerProvider";


type LanguageContextType = {
  lang: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  changeLanguage: () => {}
});

const App: React.FC = () => {
  const container = configureContainer();
  const mainTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#06369c",
        light: '#fab6b6'
      }
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
    }
  });
  const [lang, setLang] = useState(localStorage['lang'] || 'en');

  return (
    <LanguageContext.Provider value={{
      lang,
      changeLanguage: (lang: string) => {
        localStorage.setItem('lang', lang);
        setLang(lang);
      }
    }}>
      <ContainerProvider container={container}>
        <MuiThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Nav />
            <Route exact path="/">
              <Main />
            </Route>
            {
              Router.routes
                .filter(route => !route.external)
                .map((route, index) => (
                  <Route key={index} path={route.path}>
                    {
                      route.component && route.component({})
                    }
                  </Route>
                ))
            }
            <Footer />
          </BrowserRouter>
        </MuiThemeProvider>
      </ContainerProvider>
    </LanguageContext.Provider>
  );
}

export default App;