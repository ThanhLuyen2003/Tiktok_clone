import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './Component/Layout/DefaulLayout';
import { publicRoutes } from './router';
import { Fragment } from 'react';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {publicRoutes.map((item, index) => {
            const Layout = item.layout === null ? Fragment : DefaultLayout;
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
