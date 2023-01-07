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
  const { ref, inView } = useInView({
    rootMargin: '0px',
  });

  const onScroll = () => {
    const scrollY = window.pageYOffset
    img1.current.style.top = scrollY * 0.8 + "px"
    img2.current.style.top = scrollY * 0.8 + "px"
    img3.current.style.top = scrollY * 0.8 + "px"
    texts.current.style.top = scrollY * 0.7 + "px"
  }

  useEffect(() => {
    if(inView) {
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }
  }, [inView])

  return (
    <>
      {/* <Box
        ref={ref}
        position="relative"
        h="100vh"
        overflow="hidden"
      >
        <Image
          ref={img}
          src="/images/yamada_23.JPG"
          alt='Dan Abramov' 
          objectFit='cover'
          position="absolute"
          top="0"
          width="100%"
          height="100%"
        />
        <Box
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          backgroundColor="black"
          opacity="0.7"
        ></Box>
        <Box
          ref={texts}
          position="absolute"
          top="0"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="5xl" transform="translateX(-50px)">Kyosuke</Text>
          <Text color="white" fontSize="5xl" transform="translateX(50px)">Yamada</Text>
        </Box>
      </Box> */}

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
            speed: "5000",
            padding: 0,
            arrows: false,
            pagination: false,
            autoplay: true, // 自動再生を有効
            interval: 5000, // 自動再生の間隔を3秒に設定
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
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="5xl" transform="translateX(-50px)">Kyosuke</Text>
          <Text color="white" fontSize="5xl" transform="translateX(50px)">Yamada</Text>
        </Box>
      </Box>
    </>
  )
}