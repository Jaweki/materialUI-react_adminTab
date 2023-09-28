'use client'
import Header from '@components/Header'
import { IconButton, Box, useTheme } from '@mui/material'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { tokens } from "@utils/theme";
import { useEffect } from 'react';
import SalesAnalytics from '@components/SalesAnalytics';
import MpesaOperations from '@components/MpesaOperations';
import ReportGeneration from '@components/ReportGeneration';
import StaffProfile from '@components/StaffProfile';
import Schedule from '@components/Schedule';
import IssuesSuggestions from '@components/IssuesSuggestions';
import LiveTransactions from '@components/LiveTransactions';

const MainContent = ({ session, status }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mainColor = colors.primary[400];
  const router = useRouter();

  return(
    <>
      {/* <Box backgroundColor={mainColor} 
        sx={{ width: "100%", height: "100px", borderRadius: "10px" }}
      >Sales Analytics
      </Box> */}
      <Box className="grid grid-cols-2 ">
        <SalesAnalytics mainColor={mainColor} />
        <MpesaOperations mainColor={mainColor} />
      </Box>

      <ReportGeneration mainColor={mainColor} />

      <Box className="grid grid-cols-2 gap-4" sx={{ mt: "10px", mr: "10px" }}>
      
        <Box >
          <Box backgroundColor={mainColor} 
            className="flex" sx={{ justifyContent: "space-between", height: "150px", borderRadius: "10px" }}
          >
            <StaffProfile session={session}/>
            <IconButton 
              sx={{ backgroundColor: colors.greenAccent[400], borderRadius: "10px" }}
              onClick={() => {
                router.push("/registerNewStaff")
              }}
            >
              Enroll New Staff
            </IconButton>
          </Box>

          <Box className="grid grid-cols-2 gap-4" sx={{ m: "0 auto", mt: "10px", width: "400px", height: "140px" }}>
            <Schedule mainColor={mainColor} />

            <IssuesSuggestions mainColor={mainColor} />
          </Box>
        </Box>

        <LiveTransactions mainColor={mainColor} />

      </Box>
    </>
  )
}


const AdminsMainPage = () => {
  const themes = useTheme();
  const colors = tokens(themes.palette.mode);
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    // Check if session Exists
    if (session?.expires) {
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

  return (
    <Box className="grid grid-cols-1">
      <Box className="flex" sx={{ display:"flex", justifyContent: "space-between", alignItems: "center", ml: "10px" }} >
        <Header title={"Mangers Dashboard"} subtitle={"Welcome to Administration, Access and Control center."}/>
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

          <IconButton sx={{color: "red", borderRadius: "10px", alignSelf: "flex-end", mr: "10px", backgroundColor: colors.greenAccent[400] }}
            onClick={ async() => {
              await signOut(); window.location.href="/"}}
          >LOGOUT
          </IconButton>
        </Box>
      </Box>
      
      <Box sx={{ mt: "10px", mr: "10px" }}>
        <MainContent session={session} status={status} />
      </Box>
        
    </Box>
  )
}

export default AdminsMainPage;