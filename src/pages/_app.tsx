import { MantineProvider, createTheme } from '@mantine/core'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '@mantine/core/styles.css';
import '@/styles/globals.css'
import '@/styles/components.scss'
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications'
import FilterProvider from '@/providers/filter.provider';




const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    /** Your theme override here */
  });
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}
      </style>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Notifications />
        <Head>
          <title>Avatar Lustr</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </MantineProvider>
    </>
  )
}