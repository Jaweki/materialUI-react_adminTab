import { Box, IconButton } from "@mui/material";
import Image from "next/image";

const ReportGeneration = ({ mainColor }) => {
  return (
    <Box backgroundColor={mainColor} 
    sx={{ mt: "10px", width: "100%", height: "100px", padding: "5px", borderRadius: "10px", fontWeight: "bold" }}
    className="grid grid-cols-1"
    >
        <Box>Reports Generation</Box>
        <Box className="flex" sx={{ justifyContent: "space-around" }}>
            <IconButton
                className="flex flex-col items-center"
                sx={{ fontSize: "15px", color: "black", backgroundColor: "grey", borderRadius: "10px", width: "150px", height: "70px" }}
                onClick={() => {alert("Clicked")}}
            >
                <Image src={'/assets/adminsTab/money-in.png'} alt="Compeleted Transaction" width={40} height={40} />
                <span>Money In</span>
            </IconButton>

            <IconButton
                className="flex flex-col items-center"
                sx={{ fontSize: "15px", color: "black", backgroundColor: "grey", borderRadius: "10px", width: "150px", height: "70px" }}
                onClick={() => {alert("Clicked")}}
            >
                <Image src={'/assets/adminsTab/confirmed-order.png'} alt="Confirmed Orders" width={40} height={40} />
                <span>Confirmed Orders</span>
            </IconButton>

            <IconButton
                className="flex flex-col items-center"
                sx={{ fontSize: "15px", color: "black", backgroundColor: "grey", borderRadius: "10px", width: "150px", height: "70px" }}
                onClick={() => {alert("Clicked")}}
            >
                <Image src={'/assets/adminsTab/work-history.png'} alt="Confirmed Orders" width={40} height={40} />
                <span>Workplace History</span>
            </IconButton>

            <IconButton
                className="flex flex-col items-center"
                sx={{ fontSize: "15px", color: "black", backgroundColor: "grey", borderRadius: "10px", width: "150px", height: "70px" }}
                onClick={() => {alert("Clicked")}}
            >
                <Image src={'/assets/adminsTab/staff-profile.png'} alt="Staff Profile" width={40} height={40} />
                <span>Staff Profiles</span>
            </IconButton>
        </Box>
    </Box>
  )
}

export default ReportGeneration