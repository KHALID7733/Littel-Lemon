import React, { useEffect, useRef } from "react";
import { Box, Button, HStack, Icon, IconButton, Image, textDecoration } from "@chakra-ui/react";
import logo from "../imagess/Logo .svg";
import basket from '../imagess/Basket.svg'
import './littel-c.css'

const listOf = [
  {
    "nameOf": "Home",
    'link': '/Home' 

  },
  {
    "nameOf": "About",
    'link':   '/About'

  },
  {
    "nameOf": "Menu",
    'link':   '/Menue'

  },
  {
    "nameOf": "Reservation",
    'link':    '/Reservation-table'

  }
  
]
const Header = () => {

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) {
        return;
   }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
        headerElement.style.transitionDuration = '0.5s';

    } else {
        headerElement.style.transform = "translateY(-200px)";

   }
      
      prevScrollPos = currentScrollPos;
  }
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
  }
  }, []);



  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    
    <Box
      zIndex={'9000'}
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="white"
      borderBlock={'1px'}
      borderColor="#555"
      >
      <Box  maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack >
            <nav>
              <img src={logo} alt="image" />
            </nav>
          </HStack>
          <HStack>
            <nav>
              {
                listOf.map((e)=>{
                return  ( <a
                className="hover"
                  style={{
                    marginLeft: "20px"
                  }}
                  
                  key={e.nameOf}
                  href={e.link}
                  >
                    {e.nameOf}

                  </a>)

                })
              }
              <Button ml={3} mr={3} bg={'#F4CE14'}>Order Online</Button>
              <a href="" className="hover">Login</a>
              
            </nav>
            <Image className="hover" src={basket} width={40} height={45}/>
          </HStack>
          
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
