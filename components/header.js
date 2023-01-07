import { Box, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box 
      position="fixed" 
      top={0}
      width="100%"
      zIndex={1}
    >
      <header>
        <Box p="5">
          <Box display="flex" flexDirection="column" alignItems="flex-end" gap="1">
            <Box backgroundColor="white" height="2px" width="5"></Box>
            <Box backgroundColor="white" height="2px" width="5"></Box>
            <Box backgroundColor="white" height="2px" width="5"></Box>
          </Box>
        </Box>
      </header>
    </Box>
  )
}