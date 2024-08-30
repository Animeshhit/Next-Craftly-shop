import Link from "next/link";
import SideNavbarHeader from "../client-components/SideNavbarHeader";

export default function SideNavbar() {
  return (
    <>
      <aside className="w-64 p-4 border-r">
        <SideNavbarHeader />

        <nav className="mt-4 space-y-2">
          <div>
            <Link href="#" className="block text-sm py-2" prefetch={false}>
              MY ORDERS
            </Link>
          </div>
          <div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="#" className="block text-sm py-2" prefetch={false}>
                  Profile Information
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm py-2" prefetch={false}>
                  Manage Addresses
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="#" className="block text-sm py-2" prefetch={false}>
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm py-2" prefetch={false}>
                  Saved UPI
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm py-2" prefetch={false}>
                  Saved Cards
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
