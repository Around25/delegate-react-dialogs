import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteModal from "./DeleteModal";

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    // delete logic
  };

  return (
    <div>
      <Button onClick={onOpen}>Delete</Button>
      <DeleteModal
        onConfirmDelete={handleDelete}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default Form;
