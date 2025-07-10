import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex justify-end items-center px-6 gap-4 h-20">
            <SignedOut>
                <Link
                    href="/sign-in"
                    className="flex items-center justify-center h-10 w-32 rounded-md bg-gradient-to-r from-pink-400 via-pink-300 to-gray-400 p-[2px] text-white font-bold hover:shadow-md hover:text-becurlyBlack hover:shadow-gray-400/30 group">
                    <div className="rounded-md bg-becurlyBlack h-full w-full flex items-center justify-center group-hover:bg-white">
                        Sign in
                    </div>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    );
};

export default Navbar;
