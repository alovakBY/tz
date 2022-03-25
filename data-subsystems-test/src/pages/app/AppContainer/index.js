import * as yup from "yup";

import { App } from "../components/App";

import { VALIDATIONS_SCHEMA } from "../../../constants/validations";

export const AppContainer = () => {
   const validationsSchema = yup.object().shape({
      email: VALIDATIONS_SCHEMA.email,
      password: VALIDATIONS_SCHEMA.password,
   });

   return <App />;
};

// const card = {
//    cardNumber: 12345,
//    expirationDate: "12/2025",
//    cvv: 123,
//    amount: 12345,
// };
// useEffect(() => {
//    fetch("http://localhost:8000/cards", {
//       headers: {
//          "Content-Type": "application/json",
//       },
//       method: "post",
//       body: JSON.stringify(card),
//    });
// }, []);
