'use client'
import { Box, Typography, Container, useTheme } from "@mui/material"
import Link from "next/link";
import Image from "next/image";
import BarChart from "@components/BarChart";
import LineChart from "@components/LineChart";
import { tokens } from '@utils/theme';
import { signOut } from "next-auth/react";


const PageLabel = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box style={{ width: '700px', borderRadius: '10px' }}>
      <Typography style={{ margin: '0 12px',fontFamily:'satoshi' , fontStyle: 'light', fontSize: '40px', fontWeight: 'bold' }}>
        DeKUT MESS CONTROL PANEL
      </Typography>
      <Typography className="green_gradient" style={{ margin: '0 12px'}}>
        Welcome to Access and Control Services.
      </Typography>
    </Box>
  )
}

const NavSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode) ;

  return (
      <Container sx={{ mt: 1.8 }} >
        <Box  backgroundColor={colors.greenAccent[200]} margin={1} borderRadius={10}>
        <div className="grid grid-cols-3 gap-3 blue_gradient">
          {/* Todays Menu */}
          <Link href="/foodMenu" >
            <div className="flex flex-col items-center" >
              <Image src="/assets/moreIcons/food-menu.svg" alt="Toggle to the menu page" width={80} height={80} />
              <span className="mt-2">TODAY`S MENU</span>
            </div>
          </Link>

          {/* Check-in-out */}
          <Link href="/shiftRegister">
            <div className="flex flex-col items-center">
              <Image src="/assets/moreIcons/check-in-out.svg" alt="Toggle to the menu page" width={80} height={80} />
              <span className="mt-2">CHECK IN/OUT</span>
            </div>
          </Link>

          {/* LOGIN */}
          <Link href="/loginProfiles" onClick={() => signOut()}>
            <div className="flex flex-col items-center">
              <Image src="/assets/moreIcons/person.svg" alt="Toggle to the menu page" width={80} height={80} />
              <span className="mt-2">LOGIN TO PROFILE</span>
            </div>
          </Link>
        </div>
        </Box>
      </Container>
  )  
};

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
    <Typography sx={{ fontSize: '40px' }} ml={8}>Analytics</Typography>
    <Box  margin="0px" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} >
    <Box height="250px" width="500px"  pl="5px" style={{ borderRadius: '5px' }} backgroundColor={colors.primary[400]} >
      <Typography className="blue_gradient" style={{ fontSize: '20px'}}>Food Sale Per Dinual Period</Typography>
      <LineChart  />
    </Box>
    <Box height="250px" width="500px" pl="5px" style={{ borderRadius: '5px' }} backgroundColor={colors.primary[400]}>
      <Typography className="blue_gradient" style={{ fontSize: '20px'}}>Food Sale Today per POS Device</Typography>
      <BarChart />
    </Box>
    </Box>
    </>
  );
};



const Home = () => {

  return (
    <Box className="" justifyContent={"space-between"}>
      <PageLabel />
      <NavSection />
      <Dashboard />
    </Box>
  )
}

export default Home