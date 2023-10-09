# useZestPayment
useZestPayment is a custom React hook for handling payment initialization using the **Zest Payment API**. It abstracts the logic for making the API call and handling the response, allowing you to easily integrate payment functionality into your application.

## Parameters
**`apiPublicKey` (string)**: Your API public key for authenticating requests to the Zest Payment API.

## Returns
**`initializeTransaction` (function)**: A function that initiates a payment transaction when called. It takes an object with the following properties:

**`payload` (object)**: An object containing payment-related data, including email, amount, and currency.
performingTransaction (boolean): A boolean value that indicates whether a transaction is currently being processed. It is true when a transaction is in progress and false otherwise.

**`transactionError` (string)**: A string that contains an error message in case of a failed transaction. It is null when there are no errors.

## Example Usage
Here's an example of how to use the useZestPayment hook:

```javascript
import React from 'react';
import { useZestPayment } from './useZestPayment'; // Import the hook

function PaymentComponent() {****
  const { initializeTransaction, performingTransaction, transactionError } = useZestPayment({
    apiPublicKey: 'example_public_key'
  });

  return (
    <div>
      <button
        onClick={() =>
          initializeTransaction({
            payload: {
              amount: 5000,
              email: 'testemail@gmail.com',
              currency: 'NGN'
            }
          })
        }
      >
        Initialize Payment
      </button>
      {performingTransaction && <div>Loading...</div>}
      {transactionError && <div>Payment Failed</div>}
    </div>
  );
}

export default PaymentComponent;
```