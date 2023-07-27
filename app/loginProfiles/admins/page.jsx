'use client'
import Header from '@components/Header'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation';

const AdminsMainPage = () => {
  const router = useRouter();
  return (
    <>
      <Header title={"Mangers Dashboard"} subtitle={"Welcome to Administration, Access and Control center."}/>
        <IconButton 
          onClick={() => {
            router.push("/registerNewStaff")
          }}
        >
          Enroll New Staff
        </IconButton>
    </>
  )
}

export default AdminsMainPage;