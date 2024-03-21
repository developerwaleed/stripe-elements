export const OrderSummary = () => {
  return (
    <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 className="sr-only">Order summary</h2>
      <div>
        <img
          src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
      </div>
      <div className="relative">
        <ul className="space-y-5">
          <li className="flex justify-between">
            <div className="inline-flex">
              <img
                src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="max-h-16"
              />
              <div className="ml-3">
                <p className="text-base font-semibold text-white">
                  Nano Titanium Hair Dryer
                </p>
                <p className="text-sm font-medium text-white text-opacity-80">
                  Pdf, doc Kindle
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-white">$260.00</p>
          </li>
          <li className="flex justify-between">
            <div className="inline-flex">
              <img
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="max-h-16"
              />
              <div className="ml-3">
                <p className="text-base font-semibold text-white">Luisia H35</p>
                <p className="text-sm font-medium text-white text-opacity-80">
                  Hair Dryer
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-white">$350.00</p>
          </li>
        </ul>
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div className="space-y-2">
          <p className="flex justify-between text-lg font-bold text-white">
            <span>Total price:</span>
            <span>$510.00</span>
          </p>
          <p className="flex justify-between text-sm font-medium text-white">
            <span>Vat: 10%</span>
            <span>$55.00</span>
          </p>
        </div>
      </div>
      <div className="relative mt-10 text-white">
        <h3 className="mb-5 text-lg font-bold">Support</h3>
        <p className="text-sm font-semibold">
          +01 653 235 211 <span className="font-light">(International)</span>
        </p>
        <p className="mt-1 text-sm font-semibold">
          support@nanohair.com <span className="font-light">(Email)</span>
        </p>
        <p className="mt-2 text-xs font-medium">
          Call us now for payment related issues
        </p>
      </div>
      <div className="relative mt-10 flex">
        <p className="flex flex-col">
          <span className="text-sm font-bold text-white">
            Money Back Guarantee
          </span>
          <span className="text-xs font-medium text-white">
            within 30 days of purchase
          </span>
        </p>
      </div>
    </div>
  );
};
