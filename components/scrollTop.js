import { Box } from '@chakra-ui/react'
import { Link as Scroll } from 'react-scroll';
import { AiOutlineUp } from "react-icons/ai";

export default function ScrollTop() {
  // const handleClick = () => {
  //   document.getElementsByTagName("body")[0].scrollIntoView('smooth');
  // }}

  return (
    <>
      <Box
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