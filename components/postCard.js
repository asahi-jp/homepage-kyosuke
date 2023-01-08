import { useEffect, useRef } from 'react';
import {
  Box, 
  Text,
  Heading
 } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export default function PostCard() {
  const card = useRef()
  const { ref, inView, entry } = useInView({
    rootMargin: "0px",
  })

  useEffect(() => {
    if(inView) {
      card.current.style.transform = "translateY(0px)"
      card.current.style.opacity = "1"
    }
  }, [inView])

  return (
    <>
      <Box ref={ref}>
        <Box 
          ref={card}
          py="5" 
          transition="all 1s"
          opacity="0"
          transform="translateY(100px)"
          >
          <Heading size='md' textTransform='uppercase'>
            Summary
          </Heading>
          <Text pt='2' fontSize='sm'>
            View a summary of all your clients over the last month.
          </Text>
        </Box>
      </Box>
    </>
  )
}