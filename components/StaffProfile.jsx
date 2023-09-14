import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

const StaffProfile = ({ session }) => {
  return (
    <Box className="grid grid-cols-1" sx={{ width: "100%", padding: "5px" }}>
      <Box  sx={{ fontWeight: "bold"}}>
        Staff Profile
      </Box>
      
      <Box sx={{ padding: "5px", width: "100%" }} className="flex flex-col items-center gap-2">
        <IconButton
          sx={{ backgroundColor: 'grey', color: "black", fontWeight: "bold", fontSize: "10px", width: "90%", height: "60px", borderRadius: "10px", justifyContent: "space-around" }}
          className='grid grid-cols-2 gap-4'
          onClick={() => {alert("Clicked")}}
        >
          <Image src={session?.user.image} alt={session?.user.username} width={30} height={30}/>
          <div className='flex flex-col items-start'>
            <span style={{ fontSize: "25px"}}>Admins Profile</span>
            <span>{session?.user.username}</span>
          </div>
        </IconButton> 

        <IconButton
          sx={{ backgroundColor: 'grey', color: "black", fontWeight: "bold", fontSize: "20px", width: "90%", height: "40px", borderRadius: "10px", justifyContent: "space-around" }}
          onClick={() => {alert("Clicked")}}
        >
          <span>Employees Profile</span>
        </IconButton>
      </Box>

    </Box>
  )
}

export default StaffProfile