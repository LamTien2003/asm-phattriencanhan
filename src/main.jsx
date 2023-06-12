import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '@/redux/store.js';
import { Provider } from 'react-redux';
import GlobalStyles from '@/components/GlobalStyles';

ReactGA.initialize('G-E5BBQC5L9W');
const history = createBrowserHistory();
history.listen((location) => {
    ReactGA.pageview(location.pathname);
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </Provider>
        </Router>
    </React.StrictMode>,
);
