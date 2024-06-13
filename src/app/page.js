import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}
