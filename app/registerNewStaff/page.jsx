'use client'
import { useEffect } from 'react'
import LoginForm from '@components/LoginForm'
import Header from '@components/Header'
import { Box, IconButton, useTheme } from "@mui/material"
import { tokens } from '@utils/theme'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

const Page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // Check if session Exists
    if (session && session.expires) {
      const currentTime = new Date();
      const sessionExpire = new Date(session.expires) - currentTime;

      if ( sessionExpire > 0 ) {
        console.log(`session expires in: ${sessionExpire} msec`);
        const timeOutCheck = setTimeout( () => {
          
          router.push('/session-expired/noLogin');

        }, sessionExpire);

        return () => {
          clearTimeout(timeOutCheck);
        }
      }
    } else {
      // Redirect to a session-expired page
      return () => {
        
        router.push('/session-expired');
      }
    }

  }, [router, session]);
  

  return (
    <>
      <Box className="flex flex-row" sx={{ ml: "20px", justifyContent: "space-between", mr: "20px" }}>
        <Header title={'ENROLL STAFF MEMBER'} subtitle={'Enter authenticate credentials, to register new staff member'}/>
        <IconButton 
          sx={{ backgroundColor: colors.greenAccent[400], borderRadius: "10px", width: "20vh", fontWeight: "bold", color: "red" }}
          onClick={() => router.push("/")}
        >
          CANCEL
        </IconButton>
      </Box>

      <LoginForm isRegister={true} path={""}/>
    </>
  )
}

export default Page