import SideNavbar from "@/components/profile/SideNavbar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex">
          <SideNavbar />
          {children}
        </div>
      </div>
    </>
  );
}
