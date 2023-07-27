'use client'
import LoginForm from '@components/LoginForm'
import Header from '@components/Header'

const page = () => {
  return (
    <>
      <Header title={'ENROLL STAFF MEMBER'} subtitle={'Enter authenticate credentials, to register new staff member'}/>
      <LoginForm isRegister={true} path={""}/>
    </>
  )
}

export default page