import Footer from "@/common/Footer";
import IndustrySolutionsSection from "@/components/Home/IndustrySolutionsSection";
import InTheNewsSection from "@/components/Home/InTheNewsSection";
import MissionAndVision from "@/components/Home/MissionAndVision";
import OurSolutions from "@/components/Home/OurSolutions";
import WelcomeSection from "@/components/Home/WelcomeSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";

export default function Home() {
  return (
    <div>
      <WelcomeSection />
      <MissionAndVision />
      <OurSolutions />
      <IndustrySolutionsSection />
      <WhyChooseSection />
      <InTheNewsSection />
      <Footer />
    </div>
  );
}
