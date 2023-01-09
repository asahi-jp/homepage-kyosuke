import { useEffect, useRef, useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; 

const imgUrls = [
  "yamada_23.JPG",
  "yamada_01.jpg",
  "yamada_07.JPG"
]

export default function MainVisual() {
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const img1 = useRef()
  const img2 = useRef()
  const img3 = useRef()
  const images = [img1, img2, img3]
  const texts = useRef()
  const text1 = useRef()
  const text2 = useRef()
  const scroll = useRef()
  const { ref, inView } = useInView({
    rootMargin: '0px',
  });

  useEffect(() => {
    setTimeout(() => images[activeImgIndex].current.style.transform = `scale(1) translateX(0)`)
    let nextIndex = activeImgIndex + 1 == images.length
      ? 0
      : activeImgIndex + 1
    images[nextIndex].current.style.transform = `scale(2) translateX(-100vw)`
  }, [activeImgIndex])

  const onChange = (n) => {
    setActiveImgIndex(n)
  }

  useEffect(() => {
    if(inView) {
      // document.addEventListener('scroll', onScroll)
      // return () => document.removeEventListener('scroll', onScroll)
    }
  }, [inView])

  useEffect(() => {
    setTimeout(() => {
      scroll.current.style.opacity = "1"
      scroll.current.style.transform = "translateY(0px)"
      setTimeout(() => {
        text1.current.style.opacity = "1"
        text1.current.style.transform = "translateY(0px)"
        setTimeout(() => {
          text2.current.style.opacity = "1"
          text2.current.style.transform = "translateY(0px)"
        }, 300)
      }, 300)
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
          onMove={(splide, newIndex) => onChange(newIndex)}
          aria-label="私のお気に入りの画像集"
          options={{
            type: "fade",
            rewind: true,
            speed: "2000",
            padding: 0,
            arrows: false,
            pagination: false,
            autoplay: true, // 自動再生を有効
            interval: 3000, // 自動再生の間隔を3秒に設定
            height: "100vh"
          }}
          >
          {imgUrls.map((imgUrl, i) => (
            <SplideSlide key={imgUrl}>
              <Image
                ref={images[i]}
                src={`/images/${imgUrl}`}
                alt='Dan Abramov' 
                objectFit='cover'
                position="absolute"
                top="0"
                width="100%"
                height="100%"
                transform="scale(2) translateX(-100vw)"
                transition="all 1.5s"
              />
            </SplideSlide>
          ))}
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
          paddingTop="25vh"
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
          <div className="scrolldown">
            <span>Scroll</span>
          </div>
        </Box>
      </Box>
    </>
  )
}