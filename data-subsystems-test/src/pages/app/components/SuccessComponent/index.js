import { Alert, Snackbar } from "@mui/material";

export const SuccessComponent = ({ openSuccess, handleCloseSuccess }) => {
   return (
      <Snackbar
         open={openSuccess}
         autoHideDuration={6000}
         onClose={handleCloseSuccess}
         anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
         <Alert
            variant="filled"
            onClose={handleCloseSuccess}
            severity="success"
         >
            Card info successfuly registred!
         </Alert>
      </Snackbar>
   );
};
