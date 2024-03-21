"use client";

import { OrderSummary } from "./order-summary";
import { PaymentForm } from "./payment-form";
import {
  StripeElementsOptionsClientSecret,
  loadStripe,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { PaymentFormSkeleton } from "@/components/component/payment-form-skeleton";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret));
  }, [isLoading]);

  const appearance = {
    theme: "minimal",
    variables: {
      colorPrimary: "#35D0BC",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        {!clientSecret ? (
          <PaymentFormSkeleton />
        ) : (
          clientSecret && (
            <Elements
              options={options as StripeElementsOptionsClientSecret}
              stripe={stripePromise}
            >
              <PaymentForm />
            </Elements>
          )
        )}

        <OrderSummary />
      </div>
    </div>
  );
}
