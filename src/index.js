import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './containers/login';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Login />
        <GlobalStyles />
    </>
);