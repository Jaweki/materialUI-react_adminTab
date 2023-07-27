import { Schema, models, model} from 'mongoose';

const authUser = new Schema({
    jobId: {
        type: 'number',
        required: [true, 'Job id is required. Should be Numeric only'],
        unique: [true, 'Job id should be unique']
    },
    username: {
        type: 'string',
        required: [true, 'Username is required.'],
        unique: [false],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"
        ]          
    },
    password: {
        type: 'string',
        required: [true, 'Password must be unique'],
        unique: [true, 'Password should be unique'],
    }
})

const Auth = models.Auth || model('Auth', authUser, 'dekut_mess_staff');

export default Auth;