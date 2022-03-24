import { useEffect } from "react";

export const AppContainer = () => {
   const card = {
      cardNumber: 12345,
      expirationDate: "12/2025",
      cvv: 123,
      amount: 12345,
   };
   useEffect(() => {
      fetch("http://localhost:8000/cards", {
         method: "POST",
         body: JSON.stringify(card),
      });
   }, []);
   return <div>AppContainer</div>;
};
