import { CircleUser, ShoppingCart, Search } from "lucide-react";
import SearchBarForNav from "./client-components/SearchBarForNav";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <header className="backdrop-blur-lg bg-white/75 border-b-2 sticky top-0 inset-x-0 z-10">
        <div className="bg-black py-1">
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <p className="text-xs tracking-tight md:text-sm text-white/75 text-center">
                Exclusive Deals: Up to 50% Off Select Gifts – Shop Now!
              </p>
            </div>
          </div>
        </div>
        <div className="py-1">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center justify-center">
                <video className="w-10 h-10" autoPlay muted loop>
                  <source src="/gift.webm"></source>
                </video>
                {/* <Image className="w-8 h-8" src={Gift} alt="logo" /> */}
                <span className="font-semibold text-sm tracking-tighter">
                  Thecraftly.shop
                </span>
              </Link>
              <div className="hidden md:block">
                <SearchBarForNav />
              </div>

              <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                <Link href="/" className="nav-link md:hidden">
                  <Search className="links-icon" />
                </Link>
                <Link href="/" className="nav-link">
                  <ShoppingCart className="links-icon" />
                </Link>
                <Link href="/" className="nav-link">
                  <CircleUser className="links-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
