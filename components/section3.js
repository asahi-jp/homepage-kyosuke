import { Box, Image,Text } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section3() {
  const card = useRef()
  const { ref, inView, entry } = useInView({
    rootMargin: "-50px",
  })

  useEffect(() => {
    if(inView) {
      card.current.style.opacity = 1
      card.current.style.transform = "translateY(0px)"
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
        height="96"
      />
      <Box ref={ref}>
        <Box 
          ref={card}
          mt="-5"
          mx="auto"
          w="90vw"
          bg="white" 
          py="10"
          px="8"
          borderRadius="10"
          position="relative"
          zIndex={1}
          transition="all 1s"
          transform="translateY(50px)"
          opacity="0"
          >
          <Text fontSize="2xl" fontWeight="bold">Profile</Text>
          <Text mt="1" lineHeight={2}>
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