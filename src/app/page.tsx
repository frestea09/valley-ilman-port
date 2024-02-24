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
import { AccordionQuestion } from "@/components/organisms/AccrodionQuestion/AccordionQuestion";
import { AccordionQuestionDesktop } from "@/components/organisms/AccrodionQuestion/AccordionQuestionDesktop";
import { AboutUsSectionMobile } from "@/components/organisms/AboutUsSection/AboutUsSectionMobile";
import { AboutUsSection } from "@/components/organisms/AboutUsSection/AboutUsSection";
import { CostumerSection } from "@/components/organisms/CostumerSection/CostumerSection";
import { CostumerSectionMobile } from "@/components/organisms/CostumerSection/CostumerSectionMoblie";

export default function Home() {
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
      <CostumerSection />
      <CostumerSectionMobile />
    </div>
  );
}
