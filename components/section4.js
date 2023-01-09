import { useState, useRef, useEffect } from 'react';
import {
  useDisclosure,
  Box, 
  Text,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { useInView } from 'react-intersection-observer';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Modal from './modal';

const urls = [
  "xemkG83PXCo",
  "EnR069r2XSY",
  "Qpyc0v9Yeg0",
  "SK42Rc3Xm6k",
  "OLLzcMh8qgo",
  "lKLxGDMI1Z4"
]

export default function Section4() {
  const [url, setUrl] = useState()
  const videos = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { ref, inView } = useInView({
    rootMargin: "0px",
  })

  useEffect(() => {
    console.log(inView)
    if(inView) {
      videos.current.style.opacity = 1
      videos.current.style.transform = `translateY(0px)`
    } else {
      videos.current.style.opacity = 0
      videos.current.style.transform = `translateY(100px)`
    }
  }, [inView])

  const handleClick = (url) => {
    setUrl(url)
    onOpen()
  }

  return (
    <>
      <Box mt="56" pl="5" display="flex">
        <Text color="white" fontSize="4xl" fontWeight="bold" borderBottom="1px solid">Movies</Text>
      </Box>
      <Box 
        ref={ref}
        overflow="hidden"
        position="relative"
        >
        <Box 
          ref={videos} 
          mt="10" 
          h="32vh" 
          px="14" 
          pb="10"
          transition="all 1s"
          opacity="0"
          transform="translateY(100px)"
          >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            navigation={{
              prevEl: "#button_prev",
              nextEl: "#button_next"
            }}
            pagination={{ 
              clickable: true,
              el: "#pagination",
            }}
            >
            {urls.map((url) => (
              <SwiperSlide key={url}>
                <Box position="relative" width="100%" height="100%">
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <Box 
                    onClick={() => handleClick(url)}
                    position="absolute"
                    top="0" 
                    width="100%" 
                    h="100%"
                    cursor="pointer"
                    >
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <div id="button_prev" className="swiper-button-prev"></div>
        <div id="button_next" className="swiper-button-next"></div>
        <div id="pagination" className="swiper-pagination"></div>
      </Box>
      <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} url={url} />
    </>
  )
}
