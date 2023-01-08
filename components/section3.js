import { Box, Image,Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section3() {
  // const [scrollY, setScrollY] = useState()
  // let scrollY= 0
  const card = useRef()
  const { ref, inView, entry } = useInView({
    rootMargin: "0px",
  })

  // console.log(scrollY)

  const onScroll = () => {
    console.log("card.scrollY", card.scrollY)
    console.log("現在の高さ", window.pageYOffset)
    const result = window.pageYOffset - card.scrollY
    console.log("計算結果", result)

    // 元の数に足す
    const transform = card.current.style.transform
    const num = transform.replace(/[^-0-9]/g, '');


    // 

    // if(Math.sign(result) == -1) {
    //   card.current.style.transform = `translateY(${result * 0.2}px)`
    //   return
    // }
    card.current.style.transform = `translateY(-${result * 0.2}px)`
  }

  useEffect(() => {
    if(inView) {
      // ここで初期化
      // ビューポートの高さを取得
      // setScrollY(window.pageYOffset)
      // scrollY = window.pageYOffset
      card.scrollY = window.pageYOffset
      // scrollYと比較

      card.current.style.opacity = 1
      // card.current.style.transform = "translateY(0px)"

      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
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
          mt="-5"
          mx="auto"
          w="90vw"
          bg="white" 
          py="8"
          px="5"
          borderRadius="10"
          position="relative"
          zIndex={1}
          // transition="all 1s"
          transform="translateY(0px)"
          opacity="0"
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