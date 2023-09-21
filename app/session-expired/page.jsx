'use client'
import { Box, IconButton, Typography } from '@mui/material';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import { LoginOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Loading from '@components/Loading';

const SessionExpired = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Make the box take up the full viewport height
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'lightgray', // Adjust as needed for your styling
      }}
      className="flex flex-col "
    >
        <Box className="flex flex-col items-center" >
            <Typography sx={{ fontSize: "40px", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "navy" }}
            >Your Active Session Just Expired</Typography>
            <Image src={"/assets/adminsTab/session-expired.png"} alt='Your active session jsut expired' width={150} height={150} />
        </Box>
        <Box className="flex flex-row" sx={{ mt: "30px", justifyContent: "space-around", width: "50%" }}>
          <IconButton onClick={() => { <Loading />; router.push('/') }}
          sx={{borderRadius: "10px", color: "grey", backgroundColor: "navy", width: "150px", height: "60px" }}>
            <HomeOutlined />
            HomePage
          </IconButton>
          <IconButton onClick={() => { <Loading  />; router.push('/loginProfiles') }}
          sx={{borderRadius: "10px", color: "navy",  backgroundColor: "grey", width: "150px", height: "60px" }}>
            <LoginOutlined />
            Login
          </IconButton>
        </Box>
    </Box>
  )
}

export default SessionExpired