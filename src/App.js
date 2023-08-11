import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

const AppContext = React.createContext({
    isLogin: true,
    setIsLogin: () => {},
})

export const useAppContext = () => React.useContext(AppContext)
function App() {
    const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')) || false)
    return (
        <div className="App">
            <AppContext.Provider value={{ isLogin, setIsLogin }}>
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    path={route.path}
                                    key={index}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        </div>
    );
}

export default App;
