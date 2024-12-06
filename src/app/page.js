import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import OurProducts from "@/components/OurProducts";
import RequestButton from "@/components/RequestButton";

export default function Home() {
  return (
    <div className="bg-[#fdf8f2] min-h-screen py-6 px-32  font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Banner />
        <OurProducts />
        <RequestButton />
      </main>
      <Footer />
    </div>
  );
}
