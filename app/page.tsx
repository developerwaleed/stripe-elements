"use client";
import Link from "next/link";
import { Boxes } from "@/components/ui/background-boxes";

import { cn } from "@/lib/utils";

export function Home() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Accept payments with ease using the Stripe Elements
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The complete project created by Waleed Amjad to help developers
              integrate Stripe's powerful payment system into their app. Secure.
              Seamless. Scalable.
            </p>
            <Link href="/checkout">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Checkout
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Stripe is Awesome
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Lets integrate Together. You can always reach out to me for help.
          </p>
        </div>
        ;
      </div>
    </section>
  );
}

export default Home;
