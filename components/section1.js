import { useState, useEffect, useRef } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export default function Section1() {
  const [imgPositionY, setImgPositionY] = useState(0)
  const img = useRef()
  const texts = useRef()
  const { ref, inView } = useInView({
    rootMargin: "0px",
  })

  // 初期化
  useEffect(() => {
    const imgTop = img.current.getBoundingClientRect().top
    const scrollY = window.pageYOffset
    setImgPositionY(imgTop + scrollY)
    if(imgPositionY) {
      const viewBottom = window.pageYOffset + window.innerHeight
      if((viewBottom - imgPositionY) * 0.08 < 0 ) {
        img.current.style.transform = `scale(1.5) translateY(0px)`
      } else {
        img.current.style.transform = `scale(1.5) translateY(${(viewBottom - imgPositionY) * 0.1}px)`
      }
    }
  }, [imgPositionY])

  const onScroll = () => {
    const viewBottom = window.pageYOffset + window.innerHeight
    img.current.style.transform = `scale(1.5) translateY(${(viewBottom - imgPositionY) * 0.1}px)`
  }

  useEffect(() => {
    if(inView) {
      texts.current.style.opacity = "1"
      texts.current.style.transform = "translateY(0px)"
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    } else {
      texts.current.style.opacity = "0"
      texts.current.style.transform = "translateY(100px)"
    }
  }, [inView])

  return (
    <Box mt="96" position="relative">
      <Box 
        ref={ref}
        position="relative"
        mr="0"
        ml="auto"
        width="85vw"
        height="40vh"
        overflow="hidden"
        >
        <Image
          ref={img}
          src="/images/yamada_03.jpg"
          alt='Dan Abramov' 
          objectFit='cover'
          position="absolute"
          top="-24"
          width="100%"
          height="100%"
          transform="scale(1.5) translateY(0px)"
        />
        <Box
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          background="linear-gradient(135deg, black, white)"
          opacity="0.8"
        ></Box>
      </Box>
      <Box
        ref={texts}
        position="absolute"
        top="10"
        width="100%"
        height="100%"
        pl="5"
        transition="all 1s"
        opacity="0"
        transform="translateY(100px)"
        >
        <Text color="white" fontSize="4xl" letterSpacing={5} fontWeight="bold">アルペン</Text>
        <Text mt="5" color="white" fontSize="xs" lineHeight={2} >
          小学校から地元青森県大鰐町でアルペンスキーを始める<br />
          全国大会で優勝し、オリンピックを目標に掲げる<br />
          中学では、東北大会で2冠・全国規模の大会でも優勝し、国際大会に出場し10位入賞<br />
          全日本ジュニア強化指定選手にも選出<br />
          高2のシーズンに全国大会で種目別優勝し、個人総合でも優勝<br />
          高校最後のインターハイでは地元大鰐町で6位入賞<br />
          札幌国体5位、富山国体6位　入賞<br />
          FAR EAST CUP(アジア国際大会) 複合競技10位入賞<br />
          大学4年のシーズンは日本大学スキー部アルペンチーフとして<br />
          全日本学生チャンピオン　SG2位/GS3位/SL2位<br />
          インカレもアルペン部門1位で、男子総合優勝にも貢献
        </Text>
      </Box>
    </Box>
  )
}