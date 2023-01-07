import { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ProgressBar } from  'react-loader-spinner'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const overlay = useRef()
  useEffect(() => {
    setTimeout(() => {
      overlay.current.style.transform = "translateX(100vw)"
      setTimeout(() => setIsLoading(false), 500)
    }, 3000)
  }, [])

  return (
    <>
      {isLoading && (
        <Box 
          ref={overlay}
          position="absolute"
          top="0"
          pt="50dvh"
          mt="-40px"
          backgroundColor="black"
          width="100%"
          height="100%"
          zIndex="10"
          display="flex"
          justifyContent="center"
          opacity="1"
          transition="all 0.5s"
          >
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#fff'
            barColor = '#fff'
          />
        </Box>
      )}
    </>
  )
}