'use client'
import LoginForm from "@components/LoginForm";
import Header from "@components/Header";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  if ( status === 'authenticated') {
    console.log("Session curently: ", session);
    if (session?.user) {
      let jobRole = session.user.jobTitle;
      jobRole = jobRole.toLowerCase();
      jobRole += 's';
  
      router.push(`/loginProfiles/${jobRole}`);
    } else {
      signOut();
      console.log("Invalid sessions: ", session);
      console.log("session status: ", status);
      return (
        <>
          <Header title={'AUTHENTICATE'} subtitle={'To Access services enter your credentials and Authenticate'}/>
          <LoginForm isRegister={false}/>
        </>
      )
    }

  } else if (status === "loading") {
    console.log("session: ", session);
    console.log("session status", status);
    return (
      <div>
        LOADING...
      </div>
    )

  } else if (status === "unauthenticated") {
    console.log("NO sessions: ", session);
    console.log("Session status:", status);
    return (
      <>
        <Header title={'AUTHENTICATE'} subtitle={'To Access services enter your credentials and Authenticate'}/>
        <LoginForm isRegister={false}/>
      </>
    )
  }

};

export default LoginPage;