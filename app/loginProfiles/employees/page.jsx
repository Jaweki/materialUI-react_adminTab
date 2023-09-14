'use client'

import '@styles/globals.css';
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "@utils/theme";
import Header from "@components/Header";
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [expiresDate, setExpiresDate] = useState(new Date(session.expires));

  useEffect(() => {
    // Check if session Exists
    if (session) {
      const currentTime = new Date();
      const sessionExpire = expiresDate - currentTime;

      if ( sessionExpire > 0 ) {
        console.log(`session expires in: ${sessionExpire} msec`);
        const timeOutCheck = setTimeout( async() => {
          console.log("Timer out");
          // await signOut();
          // router.push("/");
          window.location.href="/";

        }, sessionExpire);

        return () => {
          clearTimeout(timeOutCheck);
        }
      }
    }
  }, [expiresDate, router, session]);
  

  const handleCheckInOut = async () => {
    await signOut();
    router.push('/');
  }

  return (
    
    <>
      <Box className="flex flex-row" sx={{ justifyContent: "space-between", ml: "20px", mr: "30px" }}>
        <Header title={"EMPLOYEES TAB"} subtitle={"Welcome to your work profile. This is your personal page, sign out before you leave."} />
        <IconButton
          sx={{ backgroundColor: colors.greenAccent[400], color: "red", borderRadius: "10px" }}
          onClick={ () => router.push("/") }
        >
          LOGOUT
        </IconButton>
      </Box>

      <Box 
        className="grid grid-cols-2 gap-3"
        sx={{ mt: "50px", mr: "50px", ml: "20px", width: "167vh", height: "70vh", justifyContent: "space-around" }}
      >
        <Box
          sx={{ width: "100%", display: "flex", borderRadius: '10px' }}
          backgroundColor={colors.primary[400]}
        >
          Assigned Work Station
        </Box>
    
        <Box
          sx={{ borderRadius: '10px', mb: "0" }}
          backgroundColor={colors.primary[400]}
        >
          Schedule
        </Box>
    
        <Box
          sx={{ borderRadius: '10px', mb: "0" }}
          backgroundColor={colors.primary[400]}
        >
          Announcements
        </Box>
    
        <Box
          sx={{ borderRadius: '10px', mb: "0" }}
          backgroundColor={colors.primary[400]}
        >
          Report Issue/ Suggestions
        </Box>

      </Box>

      <Box
        backgroundColor={colors.primary[500]}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          zIndex: 1000, // Set the z-index greater than other components
          top: "62%", // Center vertically
          left: "54.5%", // Center horizontally
          transform: "translate(-50%, -50%)", // Center the element
        }}
      >
        <IconButton sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "180px", height: "180px", borderRadius: "50%"}}
          backgroundColor={colors.greenAccent[800]}
          onClick={handleCheckInOut}
        >
          Check In
        </IconButton>
        
      </Box>

    </>
  )
}

export default Page