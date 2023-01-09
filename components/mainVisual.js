import { useEffect, useRef, useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; 

const imgUrls = [
  "yamada_23.JPG",
  "yamada_19.JPG",
  "yamada_07.JPG",
  "yamada_12.JPG"
]

export default function MainVisual() {
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const img1 = useRef()
  const img2 = useRef()
  const img3 = useRef()
  const img4 = useRef()
  const images = [img1, img2, img3, img4]
  const texts = useRef()
  const text1 = useRef()
  const text2 = useRef()
  const scroll = useRef()

  useEffect(() => {
    setTimeout(() => {
      images[activeImgIndex].current.style.transform = "scale(1)"
      images[activeImgIndex].current.style.left = "0"
    })
    let nextIndex = activeImgIndex + 1 == images.length
      ? 0
      : activeImgIndex + 1
    images[nextIndex].current.style.transform = "scale(2)"
    images[nextIndex].current.style.left = "-200vw"
  }, [activeImgIndex])

  const onChange = (n) => {
    setActiveImgIndex(n)
  }

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
            speed: "4000",
            padding: 0,
            arrows: false,
            pagination: false,
            autoplay: true, // 自動再生を有効
            interval: 5000, // 自動再生の間隔を3秒に設定
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
                left="-200vw"
                width="100%"
                height="100%"
                transform="scale(2)"
                transition="left 1s, transform 5s"
                transitionTimingFunction="ease-out"
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