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
            <Box py="5">
              <Heading size='md' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box py="5"> 
              <Heading size='md' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box py="5">
              <Heading size='md' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
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