import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBottleDroplet,
    faGraduationCap,
    faShower,
} from "@fortawesome/free-solid-svg-icons";

const menuOptions = [
    {
        title: "Tutoriales",
        url: "/guides",
        icon: faGraduationCap,
    },
    {
        title: "Rutina",
        url: "/routines",
        icon: faShower,
    },
    {
        title: "Productos",
        url: "/products",
        icon: faBottleDroplet,
    },
];

const Menu = () => {
    return (
        <div className="bg-becurlyBlack rounded-xl h-full flex flex-col items-center text-white pt-2">
            <Link
                href="/"
                className="flex flex-col items-center justify-center gap-4">
                <Image
                    src="/shortLogoWhite.svg"
                    alt="logo"
                    width={150}
                    height={150}
                />
            </Link>
            <nav className="flex flex-col justify-center gap-6 mt-8">
                {menuOptions.map((option) => (
                    <Link
                        key={option.title}
                        href={option.url}
                        className="text-lg hover:text-pink-300 hover:text-xl transition duration-150 ease-in-out">
                        {option.title}
                        &nbsp; &nbsp;
                        <FontAwesomeIcon icon={option.icon} size="lg" />
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Menu;
