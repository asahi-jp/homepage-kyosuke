import { useEffect, useRef } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; 

export default function MainVisual() {
  const img1 = useRef()
  const img2 = useRef()
  const img3 = useRef()
  const texts = useRef()
  const text1 = useRef()
  const text2 = useRef()
  const scroll = useRef()
  const { ref, inView } = useInView({
    rootMargin: '0px',
  });

  const onScroll = () => {
    const scrollY = window.pageYOffset
    img1.current.style.transform = `translateY(${scrollY * 0.6}px)`
    img2.current.style.transform = `translateY(${scrollY * 0.6}px)`
    img3.current.style.transform = `translateY(${scrollY * 0.6}px)`
    texts.current.style.transform = `translateY(${scrollY * 0.4}px)`
  }

  useEffect(() => {
    if(inView) {
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }
  }, [inView])

  useEffect(() => {
    // scroll.current.style.height = window.innerHeight + "px"
    setTimeout(() => {
      scroll.current.style.opacity = "1"
      scroll.current.style.transform = "translateY(0px)"
      setTimeout(() => {
        text1.current.style.opacity = "1"
        text1.current.style.transform = "translateY(0px)"
        setTimeout(() => {
          text2.current.style.opacity = "1"
          text2.current.style.transform = "translateY(0px)"
        }, 100)
      }, 100)
    }, 3500)
  }, [])

  return (
    <>
      <Box
        ref={ref}
        position="relative"
        h="100vh"
        overflow="hidden"
      >
        <Splide
          aria-label="私のお気に入りの画像集"
          options={{
            type: "fade",
            rewind: true,
            speed: "1000",
            padding: 0,
            arrows: false,
            pagination: false,
            autoplay: true, // 自動再生を有効
            interval: 7000, // 自動再生の間隔を3秒に設定
            height: "100vh"
          }}
          >
          <SplideSlide>
            <Image
              ref={img1}
              src="/images/yamada_23.JPG"
              alt='Dan Abramov' 
              objectFit='cover'
              position="absolute"
              top="0"
              width="100%"
              height="100%"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              ref={img2}
              src="/images/yamada_01.jpg"
              alt='Dan Abramov' 
              objectFit='cover'
              position="absolute"
              top="0"
              width="100%"
              height="100%"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              ref={img3}
              src="/images/yamada_07.JPG"
              alt='Dan Abramov' 
              objectFit='cover'
              position="absolute"
              top="0"
              width="100%"
              height="100%"
            />
          </SplideSlide>
        </Splide>
        <Box
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          backgroundColor="black"
          opacity="0.5"
        ></Box>
        <Box
          ref={texts}
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          paddingTop="30vh"
          paddingLeft="5"
        >
          <Text 
            ref={text1}
            className='font'
            color="white" 
            fontSize="6xl" 
            fontWeight="bold"
            lineHeight="1.3"
            letterSpacing={5}
            opacity="0"
            transition="all 1s"
            transform="translateY(20px)"
          >Kyosuke</Text>
          <Text 
            ref={text2}
            className='font'
            color="white" 
            fontSize="5xl" 
            fontWeight="bold"
            lineHeight="1.1"
            letterSpacing={5}
            opacity="0"
            transition="all 1s"
            transform="translateY(20px)"
          >Yamada</Text>
        </Box>
        <Box
          className='scroll'
          ref={scroll}
          position="absolute"
          top="0"
          width="100%"
          display="flex"
          justifyContent="center"
          opacity="0"
          transition="all 1s"
          transform="translateY(20px)"
        >
          <div class="scrolldown3">
            <span>Scroll</span>
          </div>
        </Box>
      </Box>
    </>
  )
}