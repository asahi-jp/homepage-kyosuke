import { Box, Image,Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section3() {
  const card = useRef()
  const { ref, inView } = useInView({
    rootMargin: "0px",
  })

  useEffect(() => {
    if(inView) {
      card.current.style.opacity = 1
      card.current.style.transform = `translateY(0px)`
    } else {
      card.current.style.opacity = 0
      card.current.style.transform = `translateY(100px)`
    }
  }, [inView])

  return (
    <>
    <Box mt="96">
      <Image
        src="/images/yamada_09.JPG"
        alt='Dan Abramov' 
        objectFit='cover'
        width="100%"
        height="100%"
      />
      <Box ref={ref}>
        <Box 
          ref={card}
          mt="-50px"
          mx="auto"
          w="90vw"
          bg="white" 
          py="8"
          px="5"
          borderRadius="10"
          position="relative"
          top="0"
          zIndex={1}
          transition="all 1s"
          opacity="0"
          transform="translateY(100px)"
          >
          <Text fontSize="2xl" fontWeight="bold">Profile</Text>
          <Text mt="1" lineHeight={1.5}>
            山田　椋喬（やまだ　きょうすけ）<br />
            1997年7月8日　25歳<br />
            出身：青森県<br />
            出身校：東奥義塾高校・日本大学<br />
            所属先：HEAD Japan ヘッドスキークラブ<br />
          </Text>
        </Box>
      </Box>
    </Box>
    </>
  )
}