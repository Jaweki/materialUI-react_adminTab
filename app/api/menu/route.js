import { connectToDB } from "@utils/database";
import Dekut_mess_menu from "@models/setMenu";

export const GET = async () => {
    try {
        await connectToDB();

        const response = await Dekut_mess_menu.find();

        console.log("Sending this Data to client: ", response );
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch MENU from the database!", { status: 500 });
    }
}