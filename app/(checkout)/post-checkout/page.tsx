"use client";

import { PostCheckout } from "@/components/post-payment-page";
import { Elements } from "@stripe/react-stripe-js";
import {
  StripeElementsOptionsClientSecret,
  loadStripe,
} from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PostCheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PostCheckout />
    </Elements>
  );
};

export default PostCheckoutPage;
