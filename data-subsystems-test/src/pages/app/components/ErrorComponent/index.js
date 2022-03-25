import { Alert, Snackbar } from "@mui/material";

export const ErrorComponent = ({ openError, handleCloseError }) => {
   return (
      <Snackbar
         open={openError}
         autoHideDuration={6000}
         onClose={handleCloseError}
         anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
         <Alert variant="filled" onClose={handleCloseError} severity="error">
            Error! Please try latter.
         </Alert>
      </Snackbar>
   );
};
