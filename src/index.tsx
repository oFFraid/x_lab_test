import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {App} from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./app/providers/ErrorBoundary";
import './app/styles/index.scss';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {SideBarProvider} from "./app/providers/SideBarProvider";

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <SideBarProvider>
                        <App/>
                    </SideBarProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
