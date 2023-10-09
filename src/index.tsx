import axios from "axios";
import { useState } from "react";

type TPayload = {
  email: string;
  amount: number;
  currency: string;
};

const useZestPayment = ({ apiPublicKey }: { apiPublicKey: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const initializeTransaction = async ({ payload }: { payload: TPayload }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.dev.gateway.zestpayment.com/payment-engine/api/v1/web-engine/process/transaction-initialization",
        payload,
        {
          headers: {
            "Api-Public-Key": apiPublicKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw "Something went wrong";
      }

      setLoading(false);

      const data = response.data;
      console.log(data);

      alert("Processing Transaction...");
      window.location.href = data.data.paymentURL;
    } catch (error) {
      setLoading(false);
      setError(true);
      alert(error);
    }
  };

  return {
    initializeTransaction,
    performingTransaction: loading,
    transactionError: error,
  };
};

export default useZestPayment;
