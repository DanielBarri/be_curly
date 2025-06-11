import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "App Dashboard",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex">
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-black/20">
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
