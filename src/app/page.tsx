import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-screen h-screen">
            <header className="flex flex-row w-full justify-end absolute">
                <Navbar />
            </header>
            <div className="flex h-full items-center justify-center">
                <Image
                    src="/logo.svg"
                    alt="logo image"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}
