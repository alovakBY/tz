import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// import { Button } from "../../../../commonComponents/Button";

import classes from "./App.module.css";
import { useState } from "react";

export const App = ({ formik }) => {
   const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      isValid,
      handleSubmit,
      dirty,
   } = formik;

   return (
      <form className={classes.form}>
         <div>
            <TextField
               type="text"
               name="cardNumber"
               label="Card number*"
               variant="outlined"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.cardNumber}
               className={classes.input}
            />
            {touched.cardNumber && errors.cardNumber && (
               <div className={classes.error}>{errors.cardNumber}</div>
            )}
         </div>
         <div>
            <TextField
               type="text"
               name="expirationDate"
               label="Expiration date*"
               variant="outlined"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.expirationDate}
               className={classes.input}
            />
            {touched.expirationDate && errors.expirationDate && (
               <div className={classes.error}>{errors.expirationDate}</div>
            )}
         </div>
         <div>
            <TextField
               type="text"
               name="cvv"
               label="cvv*"
               variant="outlined"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.cvv}
               className={classes.input}
            />
            {touched.cvv && errors.cvv && (
               <div className={classes.error}>{errors.cvv}</div>
            )}
         </div>
         <div>
            <TextField
               type="text"
               name="amount"
               label="amount*"
               variant="outlined"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.amount}
               className={classes.input}
            />
            {touched.amount && errors.amount && (
               <div className={classes.error}>{errors.amount}</div>
            )}
         </div>
         <div className={classes.buttonWrapper}>
            <Button
               className={classes.button}
               disabled={!isValid || !dirty}
               onClick={handleSubmit}
               type={"submit"}
               variant="contained"
               endIcon={<SendIcon />}
            >
               Send
            </Button>
         </div>
      </form>
   );
};
