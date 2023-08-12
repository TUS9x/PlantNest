import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import GlobalState from './component/GlobalStates';
import { StoreProvider } from './component/GlobalStates/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
const them = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: '#fff',
            },
        },
    },
    fonts: {
        body: `'Belleza', sans-serif`,
    }
  });
root.render(
    <React.StrictMode>
        <GlobalState>
            <ChakraProvider theme={them}>
                    <StoreProvider>
                        <App />
                    </StoreProvider>
            </ChakraProvider>
        </GlobalState>
    </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
