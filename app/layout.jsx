'use client'

import '@styles/globals.css';
import TopBar from '@components/TopBar';
import SideBar from '@components/SideBar';
import { ColorModeContext, useMode } from '@utils/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Provider from '@components/Provider';

const RootLayout = ({ children }) => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <html lang='en'>
                    <head>
                        <title>Managers Tab</title>
                        <meta
                            name="description"
                            content="Control the flow of services in the Cafeterial and kitchen all Digitally from one point"
                        />
                        <link rel='icon' href='/assets/moreImages/dekut-logo.jpg' type='image/x-icon' />
                        <link rel='shortcut icon' href='/assets/moreImages/dekut-logo.jpg' type='image/x-icon' />
                    </head>
                    <Provider>
                    <body>
                        <container className='flex gap-4' style={{ height: '100vh', overflowY: 'auto' }}>
                            <SideBar />
                            <main className='w-full content flex-1 flex-col'>
                                <TopBar />
                                {children}
                            </main>
                        </container>
                    </body>
                </Provider>
                </html>
            </ThemeProvider>
      </ColorModeContext.Provider>
    )
}

export default RootLayout