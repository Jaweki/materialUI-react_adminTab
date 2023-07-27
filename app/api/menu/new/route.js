import Dekut_mess_menu  from '@models/setMenu';
import { connectToDB } from '@utils/database';

const updateMenu = async (obj) => {
    try {
        const foodObj = new Dekut_mess_menu({
            id: obj.id,
            name: obj.name,
            qty: 1,
            price: obj.price,
            vat: obj.vat,
            date: obj.date
        })

        await foodObj.save();

    } catch (error) {
        throw Error(error);
    }
}

export const POST = async (req ) => { 
    const menuObj = await req.json();
    console.log(menuObj);
    try {
        await connectToDB();

        await Dekut_mess_menu.deleteMany({});

        // await menuObj.map( async (obj) => (
        //     await updateMenu(obj)
        // ));

        const menuData = menuObj.map((obj) => ({
            id: obj.id,
            name: obj.name,
            qty: 1,
            price: obj.price,
            vat: obj.vat,
            date: obj.date
        }));

        await Dekut_mess_menu.insertMany(menuData);
        
        console.log("Menu Updated Successfuly");
        return new Response("Menu Updated Sucessfuly!", { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(`Updating Menu Failed as : ${error} `, { status: 500 })
    }
}