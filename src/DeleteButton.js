import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteModal from "./DeleteModal";

const DeleteButton = ({ onConfirmDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Delete</Button>
      <DeleteModal
        onConfirmDelete={onConfirmDelete}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default DeleteButton;
