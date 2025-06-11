import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    return (
        <div className="">
            <Link href="/" className="flex items-center justify-center gap-4">
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
            </Link>
        </div>
    );
};

export default Menu;
