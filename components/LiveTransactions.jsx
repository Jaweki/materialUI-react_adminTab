import { Box, IconButton } from '@mui/material';


const LiveTransactions = ({ mainColor }) => {
  return (
    <Box backgroundColor={mainColor} 
    sx={{ height: "300px", borderRadius: "10px", padding: "10px" }}
    >
        <Box sx={{fontWeight: "bold", position: "Sticky"}}>Live Transactions</Box>

        
    </Box>
  )
}

export default LiveTransactions