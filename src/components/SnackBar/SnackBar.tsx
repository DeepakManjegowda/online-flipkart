import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const SnackBar = () => {
  const [showToast, setShowToast] = useState({ val: false, msg: "" });
  return (
    <>
      <Snackbar
        open={showToast.val}
        autoHideDuration={4000}
        onClose={() => {
          setShowToast({ val: false, msg: "" });
        }}
      >
        <Alert
          style={{ backgroundColor: "#36BBA4", color: "#fff" }}
          onClose={() => {
            setShowToast({ val: false, msg: "" });
          }}
        >
          {showToast.msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
