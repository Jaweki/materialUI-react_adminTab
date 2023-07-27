import FoodMenu from "@components/FoodMenu"

const page = () => {
  return (
    <FoodMenu buttonLabel={"Update Menu"} isUpdate={false}  dataRows={[]}/>
  )
}

export default page