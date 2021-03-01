import { Button } from "@chakra-ui/react";
import React from "react";
import { useConfirmation } from "./ConfirmationModalContext";

const DeleteButton = ({ onConfirmDelete }) => {
  const { ask } = useConfirmation();

  const handleClick = async () => {
    const confirmed = await ask();

    if (confirmed) {
      onConfirmDelete();
    }
  }

  return <Button onClick={handleClick}>Delete</Button>;
};

export default DeleteButton;
