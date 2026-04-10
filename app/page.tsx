import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import AIChatbot from "@/components/AIChatbot";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <AIChatbot />
        <CaseStudies />
        <ProcessTimeline />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
