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
            <div className="m-2 bg-becurlyBlack rounded-xl">
                <Menu />
            </div>

            {/* RIGHT */}
            <div className="w-full overflow-hidden flex flex-col py-2">
                {children}
            </div>
        </div>
    );
}
