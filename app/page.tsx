"use client";

import Hero from "@/components/sections/Hero";
import ThemeSection from "@/components/sections/ThemeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import CTASection from "@/components/sections/CTASection";
import SponsorSection from "@/components/sections/SponsorSection";

export default function Page() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <ThemeSection />
      <ExperienceSection />
      <MarqueeSection />
      <ScheduleSection />
      <CTASection />
      <SponsorSection />
    </main>
  );
}
