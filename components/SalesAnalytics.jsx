import { Box, IconButton, useTheme } from '@mui/material';
import Image from 'next/image';


const SalesAnalytics = ({ mainColor }) => {
  return (
    <Box backgroundColor={mainColor} 
    sx={{ width: "530px", height: "100px", borderRadius: "10px", padding: "5px", fontWeight: "bold" }}
    className="grid grid-cols-1"
    >
        <Box> Sales Analytics </Box>
        <Box className="flex" sx={{ justifyContent: "space-between"}}>
        <IconButton
            sx={{height: "70px", width: "150px", color: "black", fontSize: "15px", borderRadius: "10px", backgroundColor: "grey" }}
            className='flex flex-col items-center'
            onClick={() => {alert("Clicked")}}
        >
            <Image src={'/assets/adminsTab/pos-performance.png'} alt='POS Machine Performance' width={40} height={40} />
            <span>POS Performance</span>
        </IconButton>

        <IconButton
            sx={{height: "70px", width: "150px", color: "black", fontSize: "15px", borderRadius: "10px", backgroundColor: "grey" }}
            className='flex flex-col items-center'
            onClick={() => {alert("Clicked")}}
        >
            <Image src={'/assets/adminsTab/food-sales.png'} alt='Food Sales Analytics' width={40} height={40} />
            <span>Food Sales</span>
        </IconButton>

        </Box>

    </Box>
  )
}

export default SalesAnalytics