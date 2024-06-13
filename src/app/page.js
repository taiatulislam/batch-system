import Advantage from "@/components/Advantage/Advantage";
import Advertisement from "@/components/Advertisement/Advertisement";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <Advantage></Advantage>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Advertisement></Advertisement>
      <Footer></Footer>
    </div>
  );
}
