import type { Metadata } from "next";
import WhatsApp from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "Buy on Whatsapp",
};

export default async function Page({ params }: { params: { id: string } }) {
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/product?id=${params.id}`,
    { cache: "no-store" }
  );

  let { product } = await req.json();
  return <WhatsApp data={product} />;
}
