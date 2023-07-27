import { connectToDB } from "@utils/database"; 
import NewStaff from "@models/newUser";
import Token from "@models/accessToken";
import Auth from "@models/authUser";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "register-new-staff",
            name: "Jaweki Authenticator",
            credentials: {
                jobTitle: { label: "Job Title", type: "text", placeholder: "Admin or Employee" },
                jobId: { label: "Job ID", type: "text", placeholder: "your given Work Identifier" },
                surname: { label: "Surname", type: "text", placeholder: "..." },
                firstname: { label: "First Name", type: "text", placeholder: "..." },
                lastname: { label: "Last Name", type: "text", placeholder: "..." },
                accessToken: { label: "Access Token", type: "text", placeholder: "Given by the organization's ICT admin" },
                password: { label: "Password", type: "password", placeholder: "must be 8 or more & include special character" },
                gender: { label: "Gender", type: "text", placeholder: "male/female" },
                username: { label: "Username", type: "text", placeholder: "for user profile" },
                image: { label: "Profile photo", type: "file", placeholder: "jpg, jpeg, png. not more than 4MB size" },
            },
            async authorize(credentials, req) {
                console.log(credentials);
            }
        })
    ]
});

// export const POST = async(req) => {
//     const credentials = await req.json()
//     try {

//         await connectToDB();

        

//         // query the db to check if the user exists
//         const user = await Auth.findOne({
//             jobId: credentials.jobId,
//             username: credentials.username.replace(/\s/g, "").toLowerCase(),
//             password: credentials.password
//         });

//         //  warn user is present in the database
//         if (user) { 
//             return new Response(JSON.stringify('User already registed as a Staff Member'), { status: 403});
//         }

//         // validate the access token
//         const tkn = await Token.find({
//             accessToken: String(credentials.accessToken)
//         })

//         console.log("Access Token", await tkn);
//         if (!tkn) return new Response(JSON.stringify('Invalid Access Token'), { status: 403});

//         // At this point a new user can be registered as staff
//         const newStaffConfirmation = await NewStaff.create({
//             jobId: credentials.jobId,
//             jobTitle: credentials.jobTitle,
//             surname: credentials.surname,
//             firstname: credentials.firstname,
//             lastname: credentials.lastname,
//             password: credentials.password,
//             gender: credentials.gender,
//             username: credentials.username,
//             hireDate: new Date(),
//             image: {
//                 data: Buffer.from(credentials.image),
//                 contentType: 'image/jpeg'
//             }
//         })

        
//         console.log("New user, Registered as staff member", newStaffConfirmation);

//         const rank = credentials.jobTitle === 'admin' ? 'admin' : 'employee';

//         return new Response(JSON.stringify(`Success. User registered as a Staff ${rank}.`), { status: 201});
        
//     } catch (error) {
//         console.log("Error Registering user: ", error);
//         return new Response(JSON.stringify("Error registering new User as Staff member!"), { status: 500 });
//     }
// }