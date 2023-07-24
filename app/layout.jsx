'use client'

import '@styles/globals.css';
import TopBar from '@components/TopBar';
import SideBar from '@components/SideBar';
import { ColorModeContext, useMode } from '@utils/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export const metadata = {
    title: "Managers Tab",
    description: "Control the flow of services in the Cafeterial and kitchen all Digitally from one point"
}

const RootLayout = ({ children }) => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <html lang='en'>
                    <body>
                        <container className='flex gap-4' style={{ height: '100vh', overflowY: 'auto'}}>
                            <SideBar />
                            <main className='w-full'>
                                <TopBar />
                                {children}
                            </main>
                        </container>
                    </body>
                </html>
            </ThemeProvider>
      </ColorModeContext.Provider>
    )
}

export default RootLayout