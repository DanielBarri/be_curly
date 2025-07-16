import type { Metadata } from "next";
import SubMenu from "@/components/SubMenu";

export const metadata: Metadata = {
    title: "Tutoriales",
    description: "Tutoriales y guias para Be Curly",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full relative flex flex-row zIndex-10">
            {/* LEFT */}
            <div className="">
                <SubMenu />
            </div>

            {/* RIGHT */}
            <div className="w-full flex flex-col border-1 border-gray-300 bg-white rounded-xl drop-shadow-xl">
                {children}
            </div>
        </div>
    );
}
