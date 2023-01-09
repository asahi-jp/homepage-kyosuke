import { Image as ChakraImage, Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Image({ name }) {
  const img = useRef()
  const { ref, inView } = useInView({
    rootMargin: "0px",
  })

  useEffect(() => {
    if(inView) {
      img.current.style.transform = "translateY(0px)"
      img.current.style.opacity = "1"
    }
  }, [inView])

  return (
    <>
      <Box ref={ref}>
        <ChakraImage
          ref={img}
          src={`/images/${name}`}
          alt='Dan Abramov' 
          objectFit='cover'
          pb="4"
          transition="all 1s"
          opacity="0"
          transform="translateY(100px)"
        />
      </Box>
    </>
  )
}