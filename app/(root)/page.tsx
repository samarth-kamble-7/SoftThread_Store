import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";

