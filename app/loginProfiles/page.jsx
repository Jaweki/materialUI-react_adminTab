'use client'
import LoginForm from "@components/LoginForm";
import Header from "@components/Header";

const LoginPage = () => {
  return (
    <>
      <Header title={'AUTHENTICATE'} subtitle={'To Access services enter your credentials and Authenticate'}/>
      <LoginForm isRegister={false}/>
    </>
  )
};

export default LoginPage;