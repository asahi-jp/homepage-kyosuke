import { Box, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Section4() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <Box 
      mt="96" 
      overflow="hidden"
      position="relative"
      >
      <Box display="flex" pl="10">
        <Text color="white" fontSize="4xl" fontWeight="bold" borderBottom="1px solid">Movies</Text>
      </Box>
      <Box mt="5" h="48vh" w="85%" mx="auto">
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
          pagination={{ clickable: true, }}
        >
          <SwiperSlide>
            <Box position="relative" width="100%" height="100%">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xemkG83PXCo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Box 
                onClick={handleClick}
                position="absolute"
                top="0" 
                width="100%" 
                h="100%"
                cursor="pointer"
                >
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box position="relative" width="100%" height="100%">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EnR069r2XSY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Box 
                onClick={handleClick}
                position="absolute"
                top="0" 
                width="100%" 
                h="100%"
                cursor="pointer"
                >
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box position="relative" width="100%" height="100%">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Qpyc0v9Yeg0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Box 
                onClick={handleClick}
                position="absolute"
                top="0" 
                width="100%" 
                h="100%"
                cursor="pointer"
                >
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box position="relative" width="100%" height="100%">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SK42Rc3Xm6k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Box 
                onClick={handleClick}
                position="absolute"
                top="0" 
                width="100%" 
                h="100%"
                cursor="pointer"
                >
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box position="relative" width="100%" height="100%">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OLLzcMh8qgo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Box 
                onClick={handleClick}
                position="absolute"
                top="0" 
                width="100%" 
                h="100%"
                cursor="pointer"
                >
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box position="relative" width="100%" height="100%">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lKLxGDMI1Z4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Box 
                onClick={handleClick}
                position="absolute"
                top="0" 
                width="100%" 
                h="100%"
                cursor="pointer"
                >
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Box>
  )
}
