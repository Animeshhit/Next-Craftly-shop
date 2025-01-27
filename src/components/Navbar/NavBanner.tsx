import { client } from "@/lib/client";
import { GetInfosQuery } from "@/query/querys";

export default async function NavBanner() {
  // Fetch data with ISR (revalidate every hour)
  const infos: { _id: string; text: string }[] | [] = await client.fetch(
    GetInfosQuery,
    {},
    { next: { revalidate: 3600 } } // Revalidate every 3600 seconds (1 hour)
  );

  return (
    <div className="bg-black py-1">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2">
          <p className="text-xs tracking-tight font-inter text-white/75 text-center">
            {infos.length > 0 ? infos[0].text : "No information available."}
          </p>
          {/* <CouponPopup /> */}
        </div>
      </div>
    </div>
  );
}
