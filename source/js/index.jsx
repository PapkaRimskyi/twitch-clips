import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux/reducers/main-reducer';

import GlobalStyles from './global-style';

import Header from './blocks/main-blocks/header/header';
import Main from './blocks/main-blocks/main/main';

const root = document.getElementById('root');
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyles />
        <Header />
        <Main />
      </HashRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, root);
