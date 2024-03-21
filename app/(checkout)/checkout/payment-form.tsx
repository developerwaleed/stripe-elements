"use client";
import { cn } from "@/lib/utils";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          toast.success("Payment succeeded!");
          break;
        case "processing":
          toast.loading("Your payment is processing.");
          break;
        case "requires_payment_method":
          toast.error("Your payment was not successful, please try again.");
          break;
        default:
          toast.error("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/post-checkout",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message);
      //   setMessage(error.message ? error.message : "");
    } else {
      toast.error("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl pb-8">
          Secure Checkout
          <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
        </h1>

        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <p className="mt-10 text-center text-sm font-semibold text-gray-500">
            By placing this order you agree to the{" "}
            <a
              href="#"
              className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
            >
              Terms and Conditions
            </a>
          </p>
          <button
            className={cn(
              "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full mt-4",
              isLoading && "cursor-not-allowed opacity-50"
            )}
            disabled={isLoading || !stripe || !elements}
            id="submit"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="flex gap-4">
                  <p>Processing...</p>
                  <Loader className="h-6 w-6 animate-spin text-muted-foreground mx-auto text-white" />
                </div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
