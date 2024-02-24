export const CostumerSectionMobile = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between  px-6 py-2 lg:px-24 text-xs">
      <div className="flex flex-col gap-3 px-6 py-12 ">
        <h3 className="font-semibold ">Consumer Complaint Service</h3>
        <p>
          Directorate General of Consumer Protection and Trade Order Ministry of
          Trade of the Republic of Indonesia
        </p>
        <p> WhatsApp number 0853-1111-1010</p>
      </div>
      <div className="flex flex-col gap-3 px-6 py-12 ">
        <h3 className="font-semibold ">Payment Partners</h3>
        <img
          className="w-full"
          alt="payment-partner"
          src="https://storage.googleapis.com/cf-web-assets/footer/mobile-payment-partner.svg"
          width="160"
          height="88"
        />
      </div>
    </div>
  );
};
