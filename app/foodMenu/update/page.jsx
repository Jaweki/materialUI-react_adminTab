'use client'

import FoodMenu from '@components/FoodMenu';
import LoginForm from '@components/LoginForm';
import { useSession } from 'next-auth/react';
import Header from '@components/Header';

const Page = () => {
 
  const  { data: session, status } = useSession();

  if (status === 'authenticated') {
    console.log("Session: ", session);
    console.log("Status: ", status);
    return (
      <FoodMenu buttonLabel={"Set Menu"} isUpdate={true} />
    )
  }  else if (status === "loading") {
    console.log("Session: ", session);
    console.log("Status: ", status);
    return (
      <div >
        Loading...
      </div>
    )
  } else if (status === "unauthenticated") {
    console.log("Session: ", session);
    console.log("Status: ", status);
    return (
      <>
        <Header title={'AUTHENTICATE'} subtitle={'To Update Food menu, enter your credentials and Authenticate. Only kitchen Manager and head chefs allowed.'}/>
        <LoginForm isRegister={false} redirectPath={"/foodMenu/update"} />
      </>
    )
  }
}

export default Page