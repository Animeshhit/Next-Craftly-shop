import type { Metadata } from "next";
import WhatsApp from "@/sections/Whatsapp";
import { client } from "@/lib/client";
import { GetAProductQuery } from "@/query/querys";
import { Suspense } from "react";
import FormLoading from "@/components/Loading/FormLoader";

export const metadata: Metadata = {
  title: "Buy on Whatsapp",
};

export default async function Page({ params }: { params: { id: string } }) {
  const product = await client.fetch(GetAProductQuery(params.id));

  if (product.isAvailable) {
    return (
      <>
        <Suspense fallback={<FormLoading />}>
          <WhatsApp data={product} />
        </Suspense>
      </>
    );
  } else {
    return <h2>Product Not Found</h2>;
  }
}
