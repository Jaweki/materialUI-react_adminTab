// import Auth from "@models/authUser";
// import NewStaff from "@models/newUser";
// import Token from "@models/accessToken";
// import { connectToDB } from "@utils/database";
// import { NextResponse } from "next/server";
// import bcrypt from 'bcrypt';
// // import { upload } from '@utils/multerConfig'; // Import the 'upload' middleware directly

// export const POST = async (req, res) => {
//   try {
//     await connectToDB();

//     const request = await req.json(); // Parse the request body as JSON, since it's sent as JSON

//     // Check whether user exists as a registered staff member: validate by jobId
//     const userExists = await Auth.findOne({
//       jobId: request.jobId,
//     });

//     // if user exists, warn that the user exists and cannot be registered again
//     if (userExists) {
//       console.log("User Exists", userExists);
//       return new NextResponse(JSON.stringify("User already registered as a Staff Member"), { status: 403 });
//     }

//     // If user doesn't exist, check if their registration access token is valid
//     const tokenIsValid = await Token.findOne({
//       accessToken: request.accessToken,
//     });

//     if (!tokenIsValid) {
//       console.log("Registration Access Token is invalid: ", tokenIsValid);
//       return new NextResponse(JSON.stringify("Registration access Token is invalid"), { status: 403 });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(request.password, 10);

//     // Use the 'upload' middleware to handle the image upload to AWS S3
//     const uploadResult = await upload.single('image')(req, res);

//     console.log(uploadResult);

//     if (uploadResult.error) {
//       console.log("Error uploading image:", uploadResult.error);
//       return new NextResponse(JSON.stringify("Failed to upload image"), { status: 500 });
//     }

//     // If image upload was successful, get the image URL
//     const imageUrl = uploadResult.file.location;

//     // If access token is valid and image is uploaded successfully, register the user as a new staff member
//     try {
//       const newStaffMember = await NewStaff.create({
//         jobId: request.jobId,
//         jobTitle: request.jobTitle,
//         surname: request.surname,
//         firstname: request.firstname,
//         lastname: request.lastname,
//         password: hashedPassword,
//         gender: request.gender,
//         username: request.username,
//         hireDate: new Date()
//       });

//       console.log("User created: ", newStaffMember);
//       return new NextResponse(JSON.stringify("Success. Created new user as staff member."), { status: 201});
//     } catch (error) {
//       console.log(error);
//       return new NextResponse(JSON.stringify("Failed to register user as Staff member."), { status: 500 });
//     }
//   } catch (error) {
//     console.log("Error at Server side; trying to register new user: ", error);
//     return new NextResponse(JSON.stringify("Failed to register user as Staff member."), { status: 500 });
//   }
// };


import { NextResponse } from "next/server";
import Auth from "@models/authUser";
import NewStaff from "@models/newUser";
import Token from "@models/accessToken";
import { connectToDB } from "@utils/database";
import bcrypt from 'bcrypt';


export const POST = async (req, res) => {
    try{
      const userData = await req.json();
      console.log("UserData: ", userData);

      // Connect to mongodb
      await connectToDB();

      // Check to confirm user exists in the database
      console.log("Checking user existance in db");
      const userExists = await Auth.findOne({
        jobId: userData.jobId
      });

      if (userExists) {
        console.log("User Exists! registration failed.")
        return new NextResponse(JSON.stringify({ "statusData": "Failed. User is already a Staff member" }), { status: 403});
      }

      // Check to confirm that the user provided access token is valid.
      console.log("Validating access token.", userData.accessToken)
      const validToken = await Token.findOne({
        accessToken: userData.accessToken
      })

      if (!validToken) {
        console.log("Access token invalid. failed to register user!", validToken)
        return new NextResponse(JSON.stringify({"statusData": "Failed. invalid access token."}), { status: 403});
      }

      // hash the password to encrypt it before saving it in the db.
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      // create a new user document
      console.log("All checks passed an image uploaded. now registering user.")
      const newStaff = await NewStaff({
        jobId: userData.jobId,
        jobTitle: userData.jobTitle,
        firstname: userData.firstname,
        lastname: userData.lastname,
        surname: userData.surname,
        username: userData.username,
        gender: userData.gender,
        hireDate: new Date(),
        password: hashedPassword,
        imageMetadata: userData.imageMetadata,
      });

      // Save the user to mongodb
      await newStaff.save();

      console.log("user registered successfully. ", newStaff);
      return new NextResponse(JSON.stringify({"statusData": "Success. new user registered as a Staff Member"}), { status: 201});

    } catch (error) {
      console.log("Error. Accessing the register new user service! ", error);
      return new NextResponse(JSON.stringify({ Error: "Register new user SERVICE down!"}), { status: 500});
    }
  };
