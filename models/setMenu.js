import { Schema, model, models } from 'mongoose';

const menuSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    vat: {
        type: Number
    },
    date: {
        type: Date
    }
})

const Menu = models.Menu || model('Menu', menuSchema, 'dekut_mess_menu' );

export default Menu;