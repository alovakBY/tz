import { TextField, Button } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

import classes from "./Form.module.css";

export const Form = ({ formik }) => {
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
         <div className={classes.inputWrapper}>
            <div className={classes.label}>Card number*</div>
            <TextField
               type="text"
               name="cardNumber"
               label="XXXX XXXX XXXX XXXX"
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
         <div className={classes.inputWrapper}>
            <div className={classes.label}>Expiration date*</div>
            <TextField
               type="text"
               name="expirationDate"
               label="MM/YYYY"
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
         <div className={classes.inputWrapper}>
            <div className={classes.label}>CVV*</div>
            <TextField
               type="text"
               name="cvv"
               label="YYY"
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
         <div className={classes.inputWrapper}>
            <div className={classes.label}>Amount*</div>
            <TextField
               type="text"
               name="amount"
               label="Amount*"
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
