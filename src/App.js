import React, { Suspense, Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from 'src/routes'
import {UserContextProvider} from 'src/context/User'
import PageLoading from 'src/component/PageLoading'
import AuthGuard from 'src/component/AuthGuard'
import { ThemeProvider } from '@material-ui/core'
import { CreateTheme } from 'src/theme'
import { WalletProvider } from 'src/views/pages/Profile/WalletContext';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import i18n (needs to be bundled ;))
import './i18n';
import i18n from './i18n'
import Cookies from 'js-cookie'
import i18next from 'i18next';

const RenderRoutes = routes.map((route, i) => {
  const Component = route.element
  const Guard = route.guard ? AuthGuard : Fragment
  const Layout = route.layout || Fragment


  return <Route
      key={i}
      path={route.path}
      element={
        <Guard>
          <Suspense fallback={<PageLoading />}>
            <Layout>
              <Component />
            </Layout>
          </Suspense>

        </Guard>
      }
    />
})


function App() {
  const lan = Cookies.get('i18next') || 'en';
  useEffect(()=>{
    window.document.dir = i18next.dir();
  },[lan])
  const theme = CreateTheme();
  return (
    <WalletProvider>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Routes>
          {RenderRoutes}
        </Routes>
      </UserContextProvider>
    </ThemeProvider>
    </WalletProvider>
  )
}

export default App
