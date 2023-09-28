import { Box, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { tokens } from '@utils/theme';


const getLiveMpesaTransactions = async () => {
    try{
        const transactionsData = await  fetch(`/api/transactions/live`, {
            method: "GET",
        })

        if (!transactionsData.ok) {
            throw new Error("Failed to fetch data");
        }

        const data =  await transactionsData.json();
        return data;
    } catch (error) {
        console.log("Client side Admins Tab Failed to get transactions history: ", error);
        return [];
    }
}

const retrieveTimeFromDate = (date_) => {
    const date = new Date(date_);
    const currentDate = new Date();
    const isToday =
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear();

    const formattedTime = formatDateToTime(date);

    if (isToday) {
        return `Today, ${formattedTime}`;
    } else {
        const formattedDate = formatDateToDayMonthYear(date);
        return `${formattedDate}, ${formattedTime}`;
    }
};

const formatDateToTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes} ${ampm}`;
};

const formatDateToDayMonthYear = (date) => {
    const dayOptions = { weekday: 'short' };
    const monthOptions = { month: 'short', year: '2-digit' };

    const day = date.toLocaleDateString(undefined, dayOptions);
    const monthYear = date.toLocaleDateString(undefined, monthOptions);

    return `${day}, ${monthYear}`;
};


const Transactions = ({ colors, transactions }) => {
    return transactions.map((transaction) => (
        <Box
            key={transaction.mpesaTransactionId}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
        >
            <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                >
                    {transaction.mpesaTransactionId}
                </Typography>
                <Typography color={colors.grey[100]}>
                    {transaction.phoneNumber}
                </Typography>
            </Box>
            <Box color={colors.grey[100]}>
                {retrieveTimeFromDate(transaction.date)}
            </Box>
            <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                >
                Ksh. {transaction.amount}
            </Box>
        </Box>
    ))
    
}

const LiveTransactions = ({ mainColor }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch and update transactions intially
        getLiveMpesaTransactions().then((data) => {
            setTransactions(data);
        })

        // Set up an interval to fetch and update transactions every 45 seconds
        const intervalId = setInterval(() => {
            getLiveMpesaTransactions().then((data) => {
                setTransactions(data);
            });
        }, 45000); // 45 seconds in milliseconds

        // Clean up the interval when the component unmmounts
        return () => {
            clearInterval(intervalId);
        }
    }, []);

  return (
    <Box backgroundColor={mainColor} overflowY="auto" 
    sx={{ height: "295px", borderRadius: "10px", padding: "10px" }}
    >
        <Box sx={{fontWeight: "bold", position: "Sticky"}}>Live Transactions: {`  (10 most recent)`}</Box>

        <Box
          
          backgroundColor={colors.primary[400]}
          sx={{ overflowY: "auto", height: "250px" }}
        >
            <Transactions colors={colors} transactions={transactions}/>
        </Box>
    </Box>
  )
}

export default LiveTransactions