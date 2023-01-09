import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react'
import { Link as Scroll } from 'react-scroll';
import { AiOutlineUp } from "react-icons/ai";

export default function ScrollTop() {
  const scroll = useRef()

  const onScroll = () => {
    if(window.pageYOffset > 0) {
      scroll.current.style.opacity = 1
      scroll.current.style.transform = `translateY(0px)`
    } else {
      scroll.current.style.opacity = 0
      scroll.current.style.transform = `translateY(100px)`
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  // const handleClick = () => {
  //   document.getElementsByTagName("body")[0].scrollIntoView('smooth');
  // }}

  return (
    <>
      <Box
        ref={scroll}
        position="fixed"
        bottom="5"
        right="5"
        backgroundColor="white"
        borderRadius="50%"
        width="14"
        height="14"
        zIndex="10"
        cursor="pointer"
        fontSize="4xl"
        transition="all 1s"
        opacity="0"
        transform="translateY(100px)"
        >
        <Scroll 
          to="body" 
          style={{ 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            width: "100%", 
            height: "100%"
          }} 
          smooth={true}
        ><AiOutlineUp /></Scroll>
      </Box>
    </>
  )
}