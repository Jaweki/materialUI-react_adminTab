import { connectToDB } from "@utils/database"; 
import Auth from "@models/authUser";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "dekutmeals-managerstab-auth",
            name: "DeKUT Authenticate",
            credentials: {
                jobId: { label: "Job ID", type: "text", placeholder: "your given Work Identifier" },
                username: { label: "Username", type: "text", placeholder: "for user profile" },
                password: { label: "Password", type: "password", placeholder: "must be 8 or more & include special character" }
            },
            authorize: async (credentials) => {

                try {
                    await connectToDB();

                } catch(error) {
                    console.log("Error connecting to DB: ", error);
                    return null;
                }

                try {
                    const result = await Auth.findOne({ jobId: credentials.jobId });
                    if (!result) {
                        return null;
                    }
                    console.log(result);

                    const comparePassword = await bcrypt.compare(credentials.password, result.password);
                    if (!comparePassword) {
                        console.log("Bad password! ", credentials.password);
                        return null;
                    }
            
                    console.log("User authenticated by DBauth: ", result);
                    return result;
                } catch (error) {
                    console.log("Error occurred while authenticating user: ", error);
                    return null;
                }
            }
        })
    ], 
    session: {
        strategy: "jwt",
        maxAge: 1 * 1 * 5 * 60, 
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    callbacks: {
        jwt: async({ token, user }) => {
            if (user) {
                token.jobId = user.jobId;
                token.jobTitle = user.jobTitle;
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.surname = user.surname;
                token.username = user.username;
                token.gender = user.gender;
            }
            
            return token
        },
        session: async({ session, token }) => {
            if (token) {
                session.user.jobId = token.jobId;
                session.user.jobTitle = token.jobTitle;
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
                session.user.surname = token.surname;
                session.user.username = token.username;
                session.user.gender = token.gender;
            }

            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
