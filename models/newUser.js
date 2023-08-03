import { Schema, model, models } from 'mongoose';

const staffSchema = new Schema({
    jobId: {
        type: Number,
        unique: [true, 'Id already Exists!'],
        required: [true, 'Staff Id is required'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
          
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
    }
})

const NewStaff = models.NewStaff || model('NewStaff', staffSchema, 'dekut_mess_staff');

export default NewStaff;