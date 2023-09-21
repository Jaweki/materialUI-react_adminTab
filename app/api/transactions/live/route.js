import { connectToDB } from "@utils/database";
import Completed_mpesa_transactions from '@models/mpesaTransactions';

export const GET = async () => {
    try {
        await connectToDB();

        const data = await Completed_mpesa_transactions.find().sort({ date: -1 }).limit(10);

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log("Failed to retrive transaction data from DB: ", error);
        return new Response("Failed to fetch mpesa transactions from the database!", { status: 500 });
    }
}