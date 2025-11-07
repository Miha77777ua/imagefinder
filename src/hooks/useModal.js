import { useState } from "react";

export const useModal = (initalValue) => {
  const [isModalOpen, setModalOpen] = useState(initalValue);

  return [isModalOpen, setModalOpen];
}
