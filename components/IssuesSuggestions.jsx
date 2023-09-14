import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

const IssuesSuggestions = ({ mainColor, isAdmin }) => {
  return (
    <Box backgroundColor={mainColor} sx={{ borderRadius: "10px", padding: "10px" }} >
        <Box sx={{ fontWeight: "bold"}} >Issues / suggestions</Box>
        <IconButton 
            sx={{ backgroundColor: "grey", borderRadius: "10px", width: "100%" }}
            onClick={() => {alert("Clicked")}}
        >
        <Image src={'/assets/adminsTab/issues-suggestions.png'} alt='Read, Raise, or Respond to Work-place raised issues and suggestions' width={80} height={80} />
        </IconButton>
    </Box>
  )
}

export default IssuesSuggestions