import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { 
  Box, 
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, } from '@chakra-ui/react'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const router = useRouter()

  useEffect(() => {
    if(router.pathname !== "/") {
      btnRef.current.style.opacity = "1"
      btnRef.current.style.transform = "translateY(0px)"
      return
    }
    setTimeout(() => {
      btnRef.current.style.opacity = "1"
      btnRef.current.style.transform = "translateY(0px)"
    }, 3500)
  }, [])
  
  return (
    <Box 
      position="fixed" 
      top={0}
      right={0}
      pt="5" pr="5"
      zIndex={100}
      >
      <header>
        <Box 
          ref={btnRef}
          onClick={onOpen}
          position="relative"
          color="white"
          width="10"
          height="10"
          display="flex" 
          flexDirection="column"  
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          border="1px solid"
          cursor="pointer"
          opacity="0"
          transition="all 1s"
          transform="translateY(20px)"
          >
          <Box 
            position="absolute"
            backgroundColor="white" 
            height="2px" 
            width="4"
            left="0"
            right="0"
            margin="auto"
            transform="translateY(-3px)"
            >
          </Box>
          <Box 
            position="absolute"
            backgroundColor="white" 
            height="2px" 
            width="4"
            left="0"
            right="0"
            margin="auto"
            transform="translateY(3px)"
            >
          </Box>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
          >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt="24">
              <Text fontSize="3xl">Top</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>
    </Box>
  )
}