import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '@/redux/store.js';
import { Provider } from 'react-redux';
import GlobalStyles from '@/components/GlobalStyles';

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
