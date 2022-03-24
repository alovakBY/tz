import { useEffect } from "react";

export const AppContainer = () => {
   const card = {
      cardNumber: 12345,
      expirationDate: "12/2025",
      cvv: 123,
      amount: 12345,
   };
   // JSON.stringify(card)
   useEffect(() => {
      fetch("http://localhost:8000/cards", {
         mode: "no-cors",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
         method: "POST",
         body: JSON.stringify(card),
      });
   }, []);
   return <div>AppContainer</div>;
};
