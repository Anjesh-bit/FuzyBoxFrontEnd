import Modal from "@mui/material/Modal";

const FuzyModal = (props) => {
  const {
    open,
    handleOnCloseModal,
    ariaLabelBy,
    ariaLableDescribedBy,
    children,
  } = props;

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleOnCloseModal}
        aria-labelledby={ariaLabelBy}
        aria-describedby={ariaLableDescribedBy}
      >
        {children}
      </Modal>
    </>
  );
};

export default FuzyModal;
