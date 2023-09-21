'use client'
import { useEffect } from "react";
import Header from "@components/Header"
import LoginForm from "@components/LoginForm"
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const ShiftRegister = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // Check if session Exists
    if (session && session.expires) {
      const currentTime = new Date();
      const sessionExpire = new Date(session.expires) - currentTime;

      if ( sessionExpire > 0 ) {
        console.log(`session expires in: ${sessionExpire} msec`);
        const timeOutCheck = setTimeout( () => {

          router.push('/session-expired');

        }, sessionExpire);

        return () => {
          clearTimeout(timeOutCheck);
        }
      }
    } else {
      // Redirect to a session-expired page
      return () => {
        
        router.push('/session-expired/noLogin');
      }
    }

  }, [router, session]);
  
  return (
    <>
      <Header title={"Check-in or Check-out"} subtitle={"Sign Your Attendance by checking in and checking out. Enter Credentials to Validate."} />
      <LoginForm isRegister={false} path={"/"}/>
    </>
  )
}

export default ShiftRegister