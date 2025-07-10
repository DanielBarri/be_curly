import Navbar from "@/components/Navbar";
import Image from "next/image";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
    return (
        <>
            <SplashCursor />
            <div className="h-full w-full relative">
                <header className="w-full flex flex-row justify-end absolute">
                    <Navbar />
                </header>
                <div className="flex bg-becurlyBlack h-full items-center justify-center">
                    <Image
                        src="/whiteLogo.svg"
                        alt="logo image"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </>
    );
}
