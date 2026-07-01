import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WorkProcess from "@/components/sections/WorkProcess";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Premium Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        {/* Entrance Intro Block */}
        <Hero />

        {/* Company Overview & Overlapping Collage */}
        <About />

        {/* Grid of Custom Offerings */}
        <Services />

        {/* Gallery Filter & Spec Lightbox */}
        <Portfolio />

        {/* Chronological Vertical/Horizontal Timeline */}
        <WorkProcess />

        {/* Value Proposition Grid */}
        <WhyChooseUs />

        {/* Client Reviews Carousel */}
        <Testimonials />

        {/* Conversion Parallax CTA */}
        <CTA />
      </main>

      {/* Detailed Contacts & Footer Directory */}
      <Footer />
    </>
  );
}
