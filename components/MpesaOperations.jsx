import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

const MpesaOperations = ({ mainColor }) => {
  return (
    <Box backgroundColor={mainColor} 
    sx={{ width: "99%", height: "100px", borderRadius: "10px", padding: "5px", fontWeight: "bold" }}
    className="grid grid-cols-1"
    >
        <Box>Mpesa Operations</Box>
        <Box className="flex gap-3" sx={{ justifyContent: "space-around" }}>
       
        <IconButton
            sx={{height: "70px", width: "150px", color: "black", fontSize: "13px", borderRadius: "10px", backgroundColor: "grey" }}
            className='flex flex-col items-center'
            onClick={() => {alert("Clicked")}}
        >
            <Image src={'/assets/adminsTab/transaction-status.png'} alt='Check the status of an mpesa transaction' width={40} height={40} />
            <span>Transaction Status</span>
        </IconButton>

        <IconButton
            sx={{height: "70px", width: "150px", color: "black", fontSize: "13px", borderRadius: "10px", backgroundColor: "grey" }}
            className='flex flex-col items-center'
            onClick={() => {alert("Clicked")}}
        >
            <Image src={'/assets/adminsTab/mpesa-reverse.png'} alt='Request an Mpesa reverse transaction' width={40} height={40} />
            <span>Reversal</span>
        </IconButton>

        <IconButton
            sx={{height: "70px", width: "150px", color: "black", fontSize: "13px", borderRadius: "10px", backgroundColor: "grey" }}
            className='flex flex-col items-center'
            onClick={() => {alert("Clicked")}}
        >
            <Image src={'/assets/adminsTab/mpesa-wallet.png'} alt='Check Mpesa Till Account Balance' width={40} height={40} />
            <span>Account Balance</span>
        </IconButton>
       
        </Box>

    </Box>
  )
}

export default MpesaOperations