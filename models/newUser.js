import { Schema, model, models } from 'mongoose';

const staffSchema = new Schema({
    jobId: {
        type: String,
        unique: [true, 'Job Id already Exists!'],
        required: [true, 'Job Id is required'],
    },
    jobTitle: {
        type: String,
        required: [true, 'Job title is required!']
    },
    surname: {
        type: String,
        required: [true,  'Name is required']
    },
    firstname: {
        type: String,
        required: [true,  'Name is required']
    },
    lastname: {
        type: String,
        required: [true,  'Name is required']
    },
    username: {
        type: String,
        required: [true,  'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password required'],
        unique: [true, "password should be unique"]
    },
    gender: {
        type: String,
        required: [true, 'Gender type required']
    },
    hireDate: {
        type: Date,
        required: [true, 'Date of hire is required']
    },
    imageMetadata: {
        type: String,
        required: [true, 'Image is required for new user']
    }
})

const NewStaff = models.NewStaff || model('NewStaff', staffSchema, 'dekut_mess_staff');

export default NewStaff;