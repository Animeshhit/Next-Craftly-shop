import type { Metadata } from "next";
import WhatsApp from "@/components/Whatsapp";
import { Suspense } from "react";
import WhtLoader from "@/components/loading-components/WhatsappLoader";

export const metadata: Metadata = {
  title: "Buy on Whatsapp",
};

export default async function Page({ params }: { params: { id: string } }) {
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
          <Suspense fallback={<WhtLoader />}>
            <WhatsApp data={product} />
          </Suspense>
        </>
      );
    } else {
      return <h2>Product Not Found</h2>;
    }
  } else {
    return <h2>Product Not Found</h2>;
  }
}
