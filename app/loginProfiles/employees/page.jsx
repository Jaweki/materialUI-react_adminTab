'use client'

import '@styles/globals.css';
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "@utils/theme";
import Header from "@components/Header";
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Image from 'next/image';

const EmployeesTab = () => {
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
          
          router.push('/session-expired');

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
  

  const handleCheckInOut = async () => {
    await signOut();
    router.push('/');
  }

  return (
    
    <Box>
      <Box className="flex flex-row" sx={{ justifyContent: "space-between", ml: "20px", mr: "30px" }}>
        <Header title={"EMPLOYEES TAB"} subtitle={"Welcome to your work profile. This is your personal page, log out before you leave."} />
        
        <Box className="flex flex-center gap-8">
          <Image 
            src={session?.user.image}
            alt='profile'
            width={37}
            height={37}
            className='rounded-full'
            loading='lazy'
          />
          
          <p style={{ fontSize: "20px"}} >{session?.user.username.toUpperCase()}</p>
          <IconButton
          sx={{ backgroundColor: colors.greenAccent[400], color: "red", borderRadius: "10px" }}
          onClick={ () => router.push("/") }
         >
          LOGOUT
        </IconButton>
        </Box>
      </Box>

      <Box 
        className="grid grid-cols-2 gap-3"
        sx={{ mt: "50px", zIndex: 0, mr: "50px", ml: "20px", width: "167vh", height: "70vh", justifyContent: "space-around" }}
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
          zIndex: 0, // Set the z-index greater than other components
          top: "62%", // Center vertically
          left: "54.5%", // Center horizontally
          transform: "translate(-50%, -50%)", // Center the element
        }}
      >
        <IconButton sx={{ display: "flex", fontSize: "30px", fontWeight: "bold", backgroundColor: colors.greenAccent[400], justifyContent: "center", alignItems: "center", width: "180px", height: "180px", borderRadius: "50%", color: "black" }}
          onClick={handleCheckInOut}
        >
          Check In
        </IconButton>
        
      </Box>

      </Box>

      

    </Box>
  )
}

export default EmployeesTab