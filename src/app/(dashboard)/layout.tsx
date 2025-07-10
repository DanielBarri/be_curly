import type { Metadata } from "next";
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
        <div className="w-full h-full flex bg-gray-100 ">
            {/* LEFT */}
            <div className="w-[16%] md:w-[16%] lg:w-[16%] xl:w-[14%] p-2">
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] flex flex-col my-2 mr-2 border-1 border-gray-2 00 bg-white rounded-xl">
                {children}
            </div>
        </div>
    );
}
