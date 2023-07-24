import { Box, IconButton, Typography, useTheme, makeStyles } from '@mui/material';
import { useState, useContext, use } from 'react';
import Link from 'next/link';
import { tokens } from '@utils/theme';
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import { CalendarMonthOutlined } from '@mui/icons-material';
import { HelpOutlineOutlined,  DescriptionOutlined } from '@mui/icons-material';
import Image from 'next/image';


const ComponayLogo = () => {
  return (
    <>
      <Image src="/assets/moreImages/dekut-logo.jpg" alt="Company Logo (Dekut)" width={80} height={10} 
      style={{ borderRadius: "20px", height: "70px", margin: '15% auto' }}
      />

      <Typography className='green_gradient' 
        sx={{
          textAlign: 'center'
        }}
      >Dedan Kimathi University of Technology</Typography>
    </>
  )
};

const Item = ({ itemIcon, itemLabel, itemRoute }) => {
  return (
    <Link href={itemRoute} >
      <IconButton className='flex gap-4' aria-label={itemLabel} sx={{ borderRadius: "20px" }}>
        {itemIcon}
        <Typography>{itemLabel}</Typography>  
      </IconButton>
    </Link>
  )
}


const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(false);
  const [sideBWidth, setSideBWidth] = useState("135px");
  

  return (
    <Sidebar width={sideBWidth} backgroundColor={colors.primary[400]}
      sx={{
        bottom: '0',
        left: '0',
        top: '0',
        borderRadius: '5px'
      }}
    >
      <Menu style={{ margin: "10px"}}>
        {/* Menu Button And Company Logo */}
        <Box className="flex flex-col" style={{ margin: "20px auto", }}>
          <MenuItem className='flex-end' style={{ borderRadius: "10px" }}
            onClick={() => {
              isOpen ? ( setIsOpen(!isOpen), setSideBWidth("140px") ) 
              : ( 
                setIsOpen(!isOpen), setSideBWidth("250px")             
              ) 
            }}
            icon={isOpen ? <CloseOutlinedIcon /> :  <MenuOutlinedIcon /> }
          > </MenuItem>

          <ComponayLogo sx={{ alignItems: 'center', justifyContent: 'center' }} />
        </Box>

        {/* Navigation Icons */}
        {isOpen ? ( 
        <Box className="flex flex-col gap-4" sx={{ margin: 'auto 25px', alignItems: 'flex-start', }}>
          <Item 
           itemIcon={<HomeOutlinedIcon />}
           itemLabel="Dashboard"
           itemRoute={"/"}
          />

          <Item
           itemIcon={<PersonOutlinedIcon />}
           itemLabel="Login"
           itemRoute="/loginProfiles"
          />
          <Item
           itemIcon={<CalendarMonthOutlined />}
           itemLabel="Schedule"
           itemRoute="/utility/schedule"
          />
          <Item
           itemIcon={<ContactsOutlinedIcon />}
           itemLabel="Contacts Information"
           itemRoute="/utility/contacts"
          />
          <Item
           itemIcon={<HelpOutlineOutlined />}
           itemLabel="FAQ Page"
           itemRoute="/utility/faq"
          />
          <Item 
            itemIcon={<DescriptionOutlined />}
            itemLabel="Documentation"
            itemRoute="/utility/documentation"
          />
       </Box> ) : (
        <Box className="flex flex-col gap-4" style={{ alignItems: 'center'}}>
          <Item 
           itemIcon={<HomeOutlinedIcon />}
           itemLabel=""
           itemRoute={"/"}
          />

          <Item
           itemIcon={<PersonOutlinedIcon />}
           itemLabel=""
           itemRoute="/loginProfiles"
          />
          <Item
           itemIcon={<CalendarMonthOutlined />}
           itemLabel=""
           itemRoute="/utility/schedule"
          />
          <Item
           itemIcon={<ContactsOutlinedIcon />}
           itemLabel=""
           itemRoute="/utility/contacts"
          />
          <Item
           itemIcon={<HelpOutlineOutlined />}
           itemLabel=""
           itemRoute="/utility/faq"
          />
          <Item 
            itemIcon={<DescriptionOutlined />}
            itemLabel=""
            itemRoute="/utility/documentation"
          />
       </Box>
       )}
      </Menu>
    </Sidebar>
  )
}

export default SideBar;