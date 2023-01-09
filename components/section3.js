import { Box, Image,Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section3() {
  const [cardPositionY, setCardPositionY] = useState()
  const [innerHeight, setInnerHeight] = useState()
  const card = useRef()
  const { ref, inView, entry } = useInView({
    rootMargin: "0px",
  })

  // 初期化
  useEffect(() => {
    setInnerHeight(window.innerHeight)
    // カード位置を取得
    const cardTop = card.current.getBoundingClientRect().top
    const scrollY = window.pageYOffset
    setCardPositionY(cardTop + scrollY)

    // カード位置の初期化
    if(cardPositionY) {
      const viewTop = window.pageYOffset
      const percent = ((cardPositionY - viewTop) / innerHeight) * 100
      if(percent >= 50) {
        card.current.style.transform = `translateY(${(percent - 50) * 2}px)`
      } else if(percent >= 0) {
        card.current.style.transform = `translateY(${-(200 - (percent * 2))}px)`
      }
    }
  }, [cardPositionY])
  
  // スクロールごとにビューポートに対するカートの位置を割合で取得して位置をセット
  const onScroll = () => {
    const viewTop = window.pageYOffset
    // カードの位置はビューポート内の何%か（カードの位置 / ビューポート * 100）
    const percent = ((cardPositionY - viewTop) / innerHeight) * 100

    if(percent >= 50) {
      card.current.style.transform = `translateY(${(percent - 50) * 2}px)`
    } else {
      card.current.style.transform = `translateY(${-(100 - (percent * 2))}px)`
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
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
          mt="-100px"
          mx="auto"
          w="90vw"
          bg="white" 
          py="8"
          px="5"
          borderRadius="10"
          position="relative"
          top="0"
          zIndex={1}
          transition="all 0.1s"
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