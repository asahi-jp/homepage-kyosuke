import {
  Box,
  Text,
} from '@chakra-ui/react'

 import Image from './image'

 const images = [
  "yamada_01.jpg",
  "yamada_02.jpg",
  "yamada_03.jpg",
  "yamada_04.jpg",
  "yamada_05.jpg",
  "yamada_06.jpg",
  "yamada_07.JPG",
  "yamada_08.PNG",
  "yamada_09.JPG",
  "yamada_10.PNG",
  "yamada_11.PNG",
  "yamada_12.JPG",
  "yamada_13.JPG",
  "yamada_14.PNG",
  "yamada_15.JPG",
  "yamada_16.PNG",
  "yamada_17.PNG",
  "yamada_18.PNG",
  "yamada_19.JPG",
  "yamada_20.JPG",
  "yamada_21.PNG",
  "yamada_22.PNG",
  "yamada_23.JPG",
]

export default function Section6() {
  return (
    <>
      <Box mt="56">
        <Box display="flex" pl="5">
          <Text color="white" fontSize="4xl" fontWeight="bold" borderBottom="1px solid">Gallery</Text>
        </Box>
        <Box 
          mt="10" 
          w="100%"
          style={{ columns: 2 }}
          >
            {images.map((img) => (
              <Image name={img} key={img}/>
            ))}
        </Box>
      </Box>
    </>
  )
}
