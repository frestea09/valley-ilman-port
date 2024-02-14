"use client";
import Navbar from "@/components/organisms";
import { DiscoverySection } from "@/components/organisms/DiscoverySection/DiscoverySection";
import { DiscoverySectionMobile } from "@/components/organisms/DiscoverySection/DiscoverySectionMobile";
import { InputFormCheckIn } from "@/components/organisms/InputFormCheckIn/InputFormCheckIn";
import { InputFormCheckInMobile } from "@/components/organisms/InputFormCheckIn/InputFormCheckInMobile";
import { NavbarMobile } from "@/components/organisms/NavbarMobile/NavbarMobile";
import { SectionWelcome } from "@/components/organisms/SectionWelcome/SectionWelcome";
import { SectionWelcomeMobile } from "@/components/organisms/SectionWelcome/SectionWelcomeMobile";
import { GuarantedSection } from "@/components/organisms/GuarantedSection/GuarantedSection";
import { GuarantedSectionDesktop } from "@/components/organisms/GuarantedSection/GuarantedSectionDesktop";
import { StoreisSectionMobile } from "@/components/organisms/StoriesSection/StoriesSectionMobile";
import { StoriesSection } from "@/components/organisms/StoriesSection/StoriesSection";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Accordion } from "@/components/molecules/Accordion/Accordion";
import { AccordionQuestion } from "@/components/organisms/AccrodionQuestion/AccordionQuestion";
import { AccordionQuestionDesktop } from "@/components/organisms/AccrodionQuestion/AccordionQuestionDesktop";
import { AboutUsSectionMobile } from "@/components/organisms/AboutUsSection/AboutUsSectionMobile";
import { AboutUsSection } from "@/components/organisms/AboutUsSection/AboutUsSection";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";

export default function Home() {
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
      title: "What is the capacity of the pods at Pod?",
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
    <div className="overscroll-none ">
      <Navbar />
      <NavbarMobile />
      <SectionWelcome />
      <SectionWelcomeMobile />
      <InputFormCheckInMobile />
      <InputFormCheckIn />
      <DiscoverySectionMobile />
      <div className="hidden lg:flex h-[300px] w-full"></div>
      <DiscoverySection />
      <GuarantedSection />
      <GuarantedSectionDesktop />
      <StoreisSectionMobile />
      <StoriesSection />
      <AccordionQuestion />
      <AccordionQuestionDesktop />
      <AboutUsSectionMobile />
      <AboutUsSection />
      <div className="px-6 py-28 flex flex-col lg:flex-row lg:gap-4 items-center align-middle">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col gap-3  justify-center align-middle items-center  h-[300px]">
            <h3 className="text-xl">Home</h3>
            <div className="flex flex-col items-center justify-start align-middle">
              <p className="font-bold text-5xl uppercase text-[#910A67]">
                hotel
              </p>
              <p className="text-sm text-slate-500">Get More, Pay Less!</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center align-middle">
            <div>
              <h3 className="text-sm font-semibold">
                Consumer Complaint Service
              </h3>
            </div>
            <div>
              <div className="flex flex-row px-5 py-4 gap-7 items-center align-middle">
                <IoChatboxEllipsesOutline
                  className="shadow-sm"
                  size={40}
                  color="#910A67"
                />
                <div className="flex flex-col text-xs">
                  <p>Whatsapp</p>
                  <p>+61123123</p>
                </div>
              </div>
              <div className="flex flex-row px-5 py-4 gap-7 items-center align-middle">
                <MdOutlineEmail
                  className="shadow-sm"
                  size={40}
                  color="#910A67"
                />
                <div className="flex flex-col text-xs">
                  <p>Email</p>
                  <p>help@hotel.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-7 py-5">
              <FaInstagram size={30} color="#910A67" />
              <FaTiktok size={30} color="#910A67" />
              <LuYoutube size={30} color="#910A67" />
              <RiTwitterXLine size={30} color="#910A67" />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-2 w-full justify-center items-center align-middle py-5">
          <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
            <h3 className="font-semibold text-slate-800">Company</h3>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-sm">Our Prfile</p>
              <p className="text-slate-500 text-sm">Career</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
            <h3 className="font-semibold text-slate-800">Product</h3>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-sm">Cabin</p>
              <p className="text-slate-500 text-sm">POD</p>
              <p className="text-slate-500 text-sm">Co-living</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
            <h3 className="font-semibold text-slate-800">Support</h3>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-sm">Help Center</p>
              <p className="text-slate-500 text-sm">Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
            <h3 className="font-semibold text-slate-800">Business</h3>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-sm">Patnership</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  px-6 py-2 lg:px-24 text-xs">
        <div className="flex flex-col gap-3 px-6 py-12 ">
          <h3 className="font-semibold ">Consumer Complaint Service</h3>
          <p>
            Directorate General of Consumer Protection and Trade Order Ministry
            of Trade of the Republic of Indonesia
          </p>
          <p> WhatsApp number 0853-1111-1010</p>
        </div>
        <div className="flex flex-col gap-3 px-6 py-12 ">
          <h3 className="font-semibold ">Payment Partners</h3>
          <img
            class="w-full"
            alt="payment-partner"
            src="https://storage.googleapis.com/cf-web-assets/footer/mobile-payment-partner.svg"
            width="160"
            height="88"
          />
        </div>
      </div>
    </div>
  );
}
