import {
  Box,
  Text,
  Image
 } from '@chakra-ui/react'

export default function Section6() {
  return (
    <>
      <Box mt="56">
        <Box display="flex" pl="5">
          <Text color="white" fontSize="4xl" fontWeight="bold" borderBottom="1px solid">Gallary</Text>
        </Box>
        <Box 
          mt="10" 
          display="grid" 
          gridTemplateColumns="1fr 1fr"
          gridGap="3"
          w="100%" 
          px="5"
          >
          <Box display="flex" flexDirection="column" gap="3">
            <Image
              src="/images/yamada_02.jpg"
              alt='Dan Abramov' 
              objectFit='cover'
            />
            <Image
              src="/images/yamada_04.jpg"
              alt='Dan Abramov' 
              objectFit='cover'
            />
            <Image
              src="/images/yamada_05.jpg"
              alt='Dan Abramov' 
              objectFit='cover'
            />
            
          </Box>
          <Box display="flex" flexDirection="column" gap="3">
            <Image
              src="/images/yamada_06.jpg"
              alt='Dan Abramov' 
              objectFit='cover'
            />
            <Image
              src="/images/yamada_08.PNG"
              alt='Dan Abramov' 
              objectFit='cover'
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}




// yamada_01.jpg
// yamada_02.jpg
// yamada_03.jpg
// yamada_04.jpg
// yamada_05.jpg
// yamada_06.jpg
// yamada_07.JPG
// yamada_08.PNG
// yamada_09.JPG
// yamada_10.PNG
// yamada_11.PNG
// yamada_12.JPG
// yamada_13.JPG
// yamada_14.PNG
// yamada_15.JPG
// yamada_16.PNG
// yamada_17.PNG
// yamada_18.PNG
// yamada_19.JPG
// yamada_20.JPG
// yamada_21.PNG
// yamada_22.PNG
// yamada_23.JPG