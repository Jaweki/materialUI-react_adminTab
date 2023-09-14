import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

const Schedule = ({ mainColor, isAdmin }) => {
  return (
    <Box backgroundColor={mainColor} sx={{ borderRadius: "10px", padding: "10px" }} className='flex flex-col items-start' >
        <Box sx={{ fontWeight: "bold" }}>Schedule</Box>
        <IconButton sx={{ width: "100%", backgroundColor: "grey", borderRadius: '10px' }} className="flex items-center"
            onClick={() => {alert("Clicked")}}
        >
            <Image src={'/assets/adminsTab/schedule.png'} alt='Plan the Work-place schedule' width={80} height={90} />
        </IconButton>
    </Box>
  )
}

export default Schedule