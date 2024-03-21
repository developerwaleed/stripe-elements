"use client";
import { Button } from "@/components/ui/button";
import { useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Cross, CrossIcon, Loader, X } from "lucide-react";
import Link from "next/link";

type Props = {
  className: string;
};

type ComponentData = {
  icon: string;
  title: string;
  description: string;
  btnText: string;
};

export function PostCheckout() {
  const stripe = useStripe();

  const [isLoading, setIsLoading] = useState(true);
  const [componentData, setComponentData] = useState<ComponentData>({
    icon: "",
    title: "",
    description: "",
    btnText: "",
  });

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
          setComponentData({
            icon: "success",
            title: "Payment Successful",
            description: "Your payment has been processed successfully.",
            btnText: "Continue Shopping",
          });
          setIsLoading(false);
          break;
        case "processing":
          toast.loading("Your payment is processing.");
          setComponentData({
            icon: "Processing",
            title: "",
            description: "",
            btnText: "",
          });
          setIsLoading(false);
          break;
        case "requires_payment_method":
          toast.error("Your payment was not successful, please try again.");
          setComponentData({
            icon: "cross",
            title: "Payment Failed",
            description: "Your payment was not successful, please try again.",
            btnText: "Try Again",
          });
          setIsLoading(false);
          break;
        default:
          toast.error("Something went wrong.");
          setComponentData({
            icon: "cross",
            title: "Something Went Wrong!",
            description: "Please try again.",
            btnText: "Try Again",
          });
          setIsLoading(false);
          break;
      }
    });
  }, [stripe]);

  return (
    <div className="bg-[#e6f7ff] min-h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        {isLoading ? (
          <>
            <Loader className="h-6 w-6 animate-spin text-muted-foreground mx-auto" />
            <h1 className="text-center text-sm font-medium mt-4">
              Please wait your payment is being verified!
            </h1>
          </>
        ) : (
          <>
            {componentData?.icon === "success" ? (
              <CheckCircleIcon className="text-green-500 w-16 h-16 mx-auto" />
            ) : (
              <X className="mx-auto w-16 h-16" />
            )}
            <h1 className="text-center text-2xl font-semibold mt-4">
              {componentData?.title}
            </h1>
            <p className="text-center text-gray-600 mt-2">
              {componentData?.description}
            </p>
            <div className="mt-6">
              {componentData?.btnText && (
                <Link href="/checkout">
                  <Button className="w-full" variant="default">
                    {componentData?.btnText}
                  </Button>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CheckCircleIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
