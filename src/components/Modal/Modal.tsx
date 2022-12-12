import { useContext } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { GiftContext } from "@/context";

export interface ModalInterface {
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<ModalInterface> = ({ children }) => {
  const { openModal, handleCloseModal } = useContext(GiftContext);

  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
