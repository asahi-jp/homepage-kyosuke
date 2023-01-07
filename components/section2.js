import { useState, useEffect, useRef } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export default function Section2() {
  const [position, setPosition] = useState(0)
  const img = useRef()
  const texts = useRef()
  const { ref, inView, entry } = useInView({
    rootMargin: "200px",
  })

  const onScroll = () => {
    const viewPort = window.innerHeight
    const scrollY = window.pageYOffset
    const viewBottom = viewPort + scrollY
    const topPosition = viewBottom - position + 200
    img.current.style.transform = `scale(1.5) translateY(${topPosition * 0.1}px)`
    texts.current.style.transform = `translateY(${topPosition * -0.3}px)`
  }

  useEffect(() => {
    if(inView) {
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }
  }, [inView])

  // 要素の位置（position）を初期化
  useEffect(() => {
    const clientRect = img.current.getBoundingClientRect() ;
    setPosition(clientRect.top)
  }, [position])

  return (
    <Box h="100vh" py="96">
      <Box position="relative">
        <Box 
          ref={ref}
          position="relative"
          width="85vw"
          height="50vh"
          overflow="hidden"
        >
          <Image
            ref={img}
            src="/images/yamada_05.jpg"
            alt='Dan Abramov' 
            objectFit='cover'
            marginTop="-150px"
            position="absolute"
            top="0"
            width="100%"
            height="100%"
            transform="scale(1.5)"
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
          top="0"
          width="100%"
          height="100%"
          pt="96"
          pr="5"
          textAlign="right"
        >
          <Text color="white" fontSize="5xl" letterSpacing={5}>基礎</Text>
          <Text mt="5" color="white" fontSize="sm" lineHeight={2} >
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
    </Box>
  )
}