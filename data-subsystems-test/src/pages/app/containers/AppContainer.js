import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Alert, Snackbar } from "@mui/material";

import { App } from "../components/App";

import { VALIDATIONS_SCHEMA } from "../../../constants/validations";

export const AppContainer = () => {
   const [open, setOpen] = useState(true);
   const validationsSchema = yup.object().shape({
      cardNumber: VALIDATIONS_SCHEMA.cardNumber,
      expirationDate: VALIDATIONS_SCHEMA.expirationDate,
      cvv: VALIDATIONS_SCHEMA.cvv,
      amount: VALIDATIONS_SCHEMA.amount,
   });

   const onSubmitForm = async (cardData, { resetForm }) => {
      await fetch("http://localhost:8000/cards", {
         headers: {
            "Content-Type": "application/json",
         },
         method: "post",
         body: JSON.stringify(cardData),
      });
      setOpen(true);
      resetForm();
   };

   const handleClose = (event, reason) => {
      setOpen(false);
   };

   return (
      <div>
         <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
         >
            <Alert onClose={handleClose} severity="success">
               Card info successfuly registred!
            </Alert>
         </Snackbar>
         <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
         >
            <Alert onClose={handleClose} severity="error">
               Error! Please try latter.
            </Alert>
         </Snackbar>
         <Formik
            initialValues={{
               cardNumber: "",
               expirationDate: "",
               cvv: "",
               amount: "",
            }}
            validateOnBlur
            validationSchema={validationsSchema}
            onSubmit={onSubmitForm}
         >
            {(formik) => <App formik={formik} />}
         </Formik>
      </div>
   );
};
