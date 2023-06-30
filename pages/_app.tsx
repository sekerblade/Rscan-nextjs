import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '../components/layout/layout';
import LoginPage from './login';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   useEffect(() => {
      const { pathname } = router;
      if (pathname === '/') {
         router.push('/login');
      }
   }, []); // Include 'router' in the dependency array

   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            {router.pathname === '/login' ? (
               <LoginPage />
            ) : (
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            )}
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
