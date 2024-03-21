import { OrderSummary } from "./order-summary";
import { PaymentForm } from "./payment-form";

export default function CheckoutPage() {
  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <PaymentForm />
        <OrderSummary />
      </div>
    </div>
  );
}
