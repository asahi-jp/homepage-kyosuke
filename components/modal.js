import {
  Box, 
  Button,
  useDisclosure,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
 } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Modal({ isOpen, onOpen, onClose, url }) {

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="3">
            <Box w="100%" h="32vh">
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Box>
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}