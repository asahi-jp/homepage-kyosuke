import {
  Box, 
  Stack,
  StackDivider,
  Text,
  Heading,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter
 } from '@chakra-ui/react'

 import PostCard from './postCard'

 const len = [1, 2, 3]

export default function Section5() {
  return (
    <>
      <Card mt="56">
        <Box display="flex" pl="5">
          <Text color="white" fontSize="4xl" fontWeight="bold" borderBottom="1px solid">Posts</Text>
        </Box>
        <CardHeader mt="10" pl="5">
          <Heading size='md' color="white">活動報告</Heading>
        </CardHeader>
        <CardBody pt="0" px="5" color="white">
          <Stack divider={<StackDivider />} spacing='4'>
            {len.map((l) => (
              <PostCard key={l}/>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Box mt="5" display="flex" justifyContent="center">
        <Box
          px="8"
          py="2"
          borderRadius="50"
          border="1px solid white"
          color="white"
        >More</Box>
      </Box>
    </>
  )
}