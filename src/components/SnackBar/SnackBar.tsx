import { Alert, Snackbar } from "@mui/material";

const SnackBar = (props: any) => {
  return (
    <>
      <Snackbar
        open={props.showToast.val}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => {
          props.setShowToast({ val: false, msg: "" });
        }}
      >
        <Alert
          style={{ backgroundColor: "#000", color: "#fff" }}
          onClose={() => {
            props.setShowToast({ val: false, msg: "" });
          }}
        >
          {props.showToast.msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
