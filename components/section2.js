import { useState, useEffect, useRef } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export default function Section2() {
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
        width="85vw"
        height="40vh"
        overflow="hidden"
        >
        <Image
          ref={img}
          src="/images/yamada_14.PNG"
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
          backgroundColor="black"
          background="linear-gradient(225deg, black, white)"
          opacity="0.8"
        ></Box>
      </Box>
      <Box 
        ref={texts}
        position="absolute"
        top="10"
        width="100%"
        height="100%"
        pr="5"
        textAlign="right"
        transition="all 1s"
        opacity="0"
        transform="translateY(100px)"
        >
        <Text color="white" fontSize="4xl" letterSpacing={5} fontWeight="bold">基礎</Text>
        <Text mt="5" color="white" fontSize="xs" lineHeight={2} >
          大学3年のシーズンに技術選に挑戦<br />
          初出場で種目別5位などを獲り、<br />
          スーパーファイナルに進出し総合22位<br />
          アルペンと基礎の二刀流スキーヤーとしてピックアップされる<br />
          2019年8月号発売のSKI GRAPHICで学生初の表紙を飾る<br />
          基礎の方でも学生チャンピオンとなり、<br />
          2020年8月号発売のSKI GRAPHICの表紙を飾り、<br />
          10月号では特集を掲載<br />
          2020年4月にHEAD Japanに入社し、活動中<br />
          現在も二刀流スキーヤーとして、大会出場・イベント等に参加<br />
        </Text>
      </Box>
    </Box>
  )
}