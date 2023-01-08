import { Box } from '@chakra-ui/react'

export default function ScrollTop() {
  const handleClick = () => {
    // document.getElementsByTagName("body").scrollIntoView('smooth');
    // scrollTo(0, 0);
    // scrollTo(0, 100);
  }

  return (
    <>
      <Box
        onClick={handleClick}
        position="fixed"
        bottom="5"
        right="5"
        backgroundColor="white"
        borderRadius="50%"
        width="14"
        height="14"
        zIndex="10"
        >
        ⇑
      </Box>
    </>
  )
}