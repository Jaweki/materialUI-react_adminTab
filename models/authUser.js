import { Schema, models, model} from 'mongoose';

const authUser = new Schema({
    jobId: {
        type: 'number',
        unique: [true, 'Job Id already Exists!'],
        required: [true, 'Job Id is required'],
    },
    jobTitle: {
        type: 'string',
        required: [true, 'Job title is required!']
    },
    surname: {
        type: 'string',
        required: [true,  'Name is required']
    },
    firstname: {
        type: 'string',
        required: [true,  'Name is required']
    },
    lastname: {
        type: 'string',
        required: [true,  'Name is required']
    },
    username: {
        type: 'string',
        required: [true,  'Name is required']
    },
    password: {
        type: 'string',
        required: [true, 'Password required'],
        unique: [true, "password should be unique"]
    },
    gender: {
        type: 'string',
        required: [true, 'Gender type required']
    },
    hireDate: {
        type: Date,
        required: [true, 'Date of hire is required']
    },
    imageMetadata: {
        type: 'string',
        required: [true, 'Image is required for new user']
    }
})

const Auth = models.Auth || model('Auth', authUser, 'dekut_mess_staff');

export default Auth;