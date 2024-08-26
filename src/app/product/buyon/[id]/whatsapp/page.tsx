import type { Metadata } from "next";
import dynamic from "next/dynamic";
import WhtLoader from "@/components/loading-components/WhatsappLoader";

export const metadata: Metadata = {
  title: "Buy on Whatsapp",
};

export default async function Page({ params }: { params: { id: string } }) {
  const WhatsApp = dynamic(() => import("@/components/Whatsapp"), {
    loading: () => <WhtLoader />,
  });
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/product?id=${params.id}`,
    { cache: "no-store" }
  );

  if (!req.ok) {
    return <h2>Something went Wrong!!</h2>;
  }

  let { product } = await req.json();
  if (!product.isDraft) {
    if (product.isAvailable) {
      return (
        <>
          <WhatsApp data={product} />
        </>
      );
    } else {
      return <h2>Product Not Found</h2>;
    }
  } else {
    return <h2>Product Not Found</h2>;
  }
}
