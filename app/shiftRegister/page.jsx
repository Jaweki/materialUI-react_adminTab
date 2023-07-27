'use client'
import Header from "@components/Header"
import LoginForm from "@components/LoginForm"

const page = () => {
  return (
    <>
      <Header title={"Check-in or Check-out"} subtitle={"Sign Your Attendance by checking in and checking out. Enter Credentials to Validate."} />
      <LoginForm isRegister={false} path={"/"}/>
    </>
  )
}

export default page