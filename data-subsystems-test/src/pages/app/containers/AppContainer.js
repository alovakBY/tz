import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { CircularProgress } from "@mui/material";

import { Form } from "../components/Form";
import { ErrorComponent } from "../components/ErrorComponent";
import { SuccessComponent } from "../components/SuccessComponent";

import { VALIDATIONS_SCHEMA } from "../../../constants/validations";

import classes from "./AppContainer.module.css";

export const AppContainer = () => {
   const [openSuccess, setOpenSuccess] = useState(false);
   const [openError, setOpenError] = useState(false);
   const [loading, setLoading] = useState(false);

   const validationsSchema = yup.object().shape({
      cardNumber: VALIDATIONS_SCHEMA.cardNumber,
      expirationDate: VALIDATIONS_SCHEMA.expirationDate,
      cvv: VALIDATIONS_SCHEMA.cvv,
      amount: VALIDATIONS_SCHEMA.amount,
   });

   const onSubmitForm = async (cardData, { resetForm }) => {
      setLoading(true);
      await fetch("http://localhost:8000/cards", {
         headers: {
            "Content-Type": "application/json",
         },
         method: "post",
         body: JSON.stringify(cardData),
      })
         .then((data) => {
            setOpenSuccess(true);
            resetForm();
         })
         .catch((err) => {
            console.log(err);
            setOpenError(true);
         })
         .finally(() => setLoading(false));
   };

   const handleCloseSuccess = (event, reason) => {
      setOpenSuccess(false);
   };

   const handleCloseError = (event, reason) => {
      setOpenError(false);
   };

   return (
      <div className={classes.container}>
         {loading && (
            <div className={classes.loading}>
               <CircularProgress />
            </div>
         )}
         <SuccessComponent
            openSuccess={openSuccess}
            handleCloseSuccess={handleCloseSuccess}
         />
         <ErrorComponent
            openError={openError}
            handleCloseError={handleCloseError}
         />
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
            {(formik) => <Form formik={formik} />}
         </Formik>
      </div>
   );
};
