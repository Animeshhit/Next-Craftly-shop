import type { Metadata } from "next";
import WhatsApp from "@/components/Whatsapp";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Buy on Whatsapp",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { replace } = useRouter();
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
      return <WhatsApp data={product} />;
    } else {
      replace("/");
    }
  } else {
    replace("/");
  }
}
