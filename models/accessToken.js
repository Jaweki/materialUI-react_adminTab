import { Schema, model, models } from 'mongoose';

const token = new Schema({
    accessToken: {
        type: String,
        required: [true, 'Access token required for creating new user'],
        unique: true,
    }
});


const Token = models.Token || model('Token', token, 'access-tokens-db');

export default Token;