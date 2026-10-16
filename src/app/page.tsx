import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Featured } from "@/components/sections/Featured";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyEnsan } from "@/components/sections/WhyEnsan";
import { JoinCta } from "@/components/sections/JoinCta";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "إنسان ENSAN | استشارة أوضح، وخطوة أهدى",
  description:
    "اكتشف مستشارين في مجالات متعددة، واقرأ ملفاتهم، وتواصل بالطريقة التي تناسبك — بخطوات واضحة وتجربة بسيطة.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <HowItWorks />
      <WhyEnsan />
      <JoinCta />
      <Faq />
      <FinalCta />
    </>
  );
}
