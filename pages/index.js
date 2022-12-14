import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import MainVisual from '../components/mainVisual'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section5 from '../components/section5'
import Section6 from '../components/section6'
import Loading from '../components/loading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyosuke Yamada official</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainVisual />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Box mt="56"></Box>
      <Loading />
    </>
  )
}
