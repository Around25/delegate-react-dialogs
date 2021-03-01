import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    // delete logic
  }

  return (
    <div>
      <Button onClick={onOpen}>Delete</Button>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Deleting this resource is an irreversible action. Are you sure you
            want to proceed?
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>I've changed my mind</Button>
            <Button colorScheme="blue" ml={3} onClick={handleDelete}>
              Yes, delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Form;
