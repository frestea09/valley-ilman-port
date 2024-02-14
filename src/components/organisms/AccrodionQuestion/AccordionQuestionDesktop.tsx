import { Accordion } from "@/components/molecules/Accordion/Accordion";

export const AccordionQuestionDesktop = () => {
  const listOfQuestion = [
    {
      id: 1,
      title: " When are the check-in and check-out times at Hotel?",
      description: `You can check-in at 14:00 and check-out at 12:00, with the option to
          request an early check-in starting from 12:00 at no extra charge,
          depending on room availability, or opt for a late check-in, as our
          hosts at Hotel are available 24/7.`,
    },
    {
      id: 2,
      title: "What is the capacity of the pods at Bobopod?",
      description: `The double pod can accommodate 2 adults and 1 child under 10 years old, whereas the single pod is suitable for only 1 adult. To ensure a comfortable stay, kindly adhere to the specified capacity details. Additionally, guests traveling with children under 10 years old booking a double pod are not required to provide proof of swab/vaccination.`,
    },
    {
      id: 3,
      title:
        " How are the terms and conditions of staying at Hotel during the pandemic?",
      description: `In line with government directives and efforts to curb the spread of the virus, guests must present either their vaccination certificate indicating at least the first dose or evidence of a negative swab test taken no more than two days prior to their stay. This policy remains in effect until further notice.`,
    },
    {
      id: 4,
      title: "Can reservations be rescheduled or refunded?",
      description: `As per our Standard Operating Procedure (SOP), confirmed reservations are non-reschedulable and non-refundable. For inquiries or further assistance regarding your reservation, please reach out to our Customer Service (CS) via WhatsApp at the following number: 0821-1900-7791.`,
    },
    {
      id: 5,
      title: "Is it necessary to show our IDs during check-in at Hotel?",
      description: `ID Card Validation is a necessary procedure in all hotels aimed at ensuring appropriate measures in the event of unforeseen incidents.
    
          At Hotel, guests must validate their ID Card via the Hotel application using their ID (KTP), Driver’s License (SIM), or passport to confirm that they are at least 18 years old. This requirement applies only to the guest who made the reservation. Guests under 18 years old should reserve the hotel with someone older.`,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col gap-8 justify-center align-middle items-center px-6 py-16">
      <h3 className="text-3xl font-semibold">Frequently Asked Questions</h3>
      <div className="w-[500px] max-h-[800px]">
        {listOfQuestion.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
