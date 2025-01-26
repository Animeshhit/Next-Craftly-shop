import { client } from "@/lib/client";
import { GetInfosQuery } from "@/query/querys";
// import CouponPopup from "./couponPopup";
async function NavBanner() {
  let infos: { _id: string; text: string }[] | [] = await client.fetch(
    GetInfosQuery,
    {},
    { cache: "no-cache" }
  );
  return (
    <>
      <div className="bg-black py-1">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs tracking-tight text-white/75 text-center">
              {infos[0].text}
            </p>
            {/* <CouponPopup /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBanner;
