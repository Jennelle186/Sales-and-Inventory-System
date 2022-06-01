import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Button,
  DialogActions,
} from "@mui/material";

const Modal = ({
  id,
  title,
  subtitle,
  children,
  isOpen,
  handleClose,
  deleteProductCallBack,
}) => {
  const handleConfirm = async () => {
    await deleteProductCallBack(id);
    alert("Successful!");
    handleClose();
    window.location.reload();
  };
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
        <Divider />
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          No
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
