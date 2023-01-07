import { useEffect, useRef } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export default function MainVisual() {
  const img = useRef()
  const texts = useRef()
  const { ref, inView } = useInView({
    rootMargin: '0px',
  });

  const onScroll = () => {
    const scrollY = window.pageYOffset
    img.current.style.top = scrollY * 0.9 + "px"
    // img.current.style.transform = `scale(${1 + scrollY * 0.0005})`
    texts.current.style.top = scrollY * 0.7 + "px"
  }

  useEffect(() => {
    if(inView) {
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }
  }, [inView])

  return (
    <>
      <Box
        ref={ref}
        position="relative"
        h="100vh"
        overflow="hidden"
      >
        <Image
          ref={img}
          src="/images/yamada_23.JPG"
          alt='Dan Abramov' 
          objectFit='cover'
          position="absolute"
          top="0"
          width="100%"
          height="100%"
        />
        <Box
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          backgroundColor="black"
          opacity="0.7"
        ></Box>
        <Box
          ref={texts}
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="5xl" transform="translateX(-50px)">Kyosuke</Text>
          <Text color="white" fontSize="5xl" transform="translateX(50px)">Yamada</Text>
        </Box>
      </Box>
    </>
  )
}