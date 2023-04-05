import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { AppProvider } from './providers/AppProvider/AppProvider';
import { ErrorBoundary } from './providers/ErrorBoundary/ErrorBoundary';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <AppProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </AppProvider>
        </ErrorBoundary>
    </React.StrictMode>
);