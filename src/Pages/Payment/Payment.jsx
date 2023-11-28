import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway);
const Payment = () => {
  return (
    <div>
      <h1 className="text-6xl text-white font-bold text-center">
        Please Payment
      </h1>
      <div className="w-[500px] bg-white h-[300px] p-4 mt-[30px] ml-[400px]">
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
