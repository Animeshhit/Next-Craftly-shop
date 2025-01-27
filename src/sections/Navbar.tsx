import { Search } from "lucide-react";
import SearchBarForNav from "../components/Navbar/SearchBarForNav";
import Link from "next/link";
import Navigation from "../components/Navbar/Navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "../components/ui/skeleton";

const Navbar = async () => {
  const NavBanner = dynamic(() => import("../components/Navbar/NavBanner"), {
    ssr: true,
    loading: () => <Skeleton className="py-2 animate-pulse bg-gray-200" />,
  });

  return (
    <>
      <header className="backdrop-blur-lg border-b bg-white/75 sticky top-0 inset-x-0 z-10">
        <NavBanner />
        <div className="py-1 overflow-hidden relative">
          <div className="w-[400px] h-[200px] bg-pink-500 absolute -z-10 rounded-full blur-[100px]"></div>
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center justify-center">
                <video className="w-10 h-10" autoPlay muted loop>
                  <source src="/gift.webm"></source>
                </video>
                {/* <Image className="w-8 h-8" src={Gift} alt="logo" /> */}
                <span className="font-semibold font-oswald tracking-tighter">
                  THE CRAFTLY SHOP
                </span>
              </Link>
              <div className="hidden md:block">
                <SearchBarForNav />
              </div>

              <div className="flex items-center gap-1">
                <Link href="/" className="md:hidden">
                  <Search className="w-5 h-5" />
                </Link>
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
