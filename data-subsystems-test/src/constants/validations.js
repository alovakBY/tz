import * as yup from "yup";

import { VALIDATIONS_ERRORS_MESSAGES } from "./validationsErrorsMessages";

export const VALIDATIONS_SCHEMA = {
   cardNumber: yup
      .string()
      .length(16, VALIDATIONS_ERRORS_MESSAGES.CARD_NUMBER)
      .matches(/[0-9]{16}/, VALIDATIONS_ERRORS_MESSAGES.ONLY_DIGITS)
      .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
   expirationDate: yup
      .string()
      .matches(
         /(^(?:[0-1][0-2]) *\/ *[0-9][0-9][0-9][0-9]$)/,
         VALIDATIONS_ERRORS_MESSAGES.EXPIRATION_DATE
      )
      .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
   cvv: yup
      .string()
      .length(3, VALIDATIONS_ERRORS_MESSAGES.CVV)
      .matches(/[0-9]{3}/, VALIDATIONS_ERRORS_MESSAGES.ONLY_DIGITS)
      .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
   amount: yup
      .string()
      .matches(/^[0-9]{1,}$/, VALIDATIONS_ERRORS_MESSAGES.ONLY_DIGITS)
      .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
};
