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
        <div className="w-full h-full flex">
            {/* LEFT */}
            <div className="ml-2 my-2 bg-becurlyBlack rounded-xl">
                <Menu />
            </div>

            {/* RIGHT */}
            <div className="w-full overflow-hidden flex flex-col">
                {children}
            </div>
        </div>
    );
}
