import React from "react";
import DeleteButton from "./DeleteButton";

const Form = () => {
  const handleDelete = () => {
    // delete logic
  };

  return (
    <div>
      <DeleteButton onConfirmDelete={handleDelete} />
    </div>
  );
};

export default Form;
