'use client'

import FoodMenu from '@components/FoodMenu';
// import { updateDataFromDB } from '@utils/dbData';

const page = () => {
  // updateDataFromDB();
  return (
    <FoodMenu buttonLabel={"Set Menu"} isUpdate={true} />
  )
}

export default page