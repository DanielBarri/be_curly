"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverModal from "./HoverModal";
import { useState } from "react";
import {
    faFileLines,
    faSquareCaretRight,
    faStar,
} from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";

const menuOptions = [
    {
        title: "Tutoriales",
        url: "/guides",
        icon: faSquareCaretRight,
        component: <SubMenu />,
    },
    {
        title: "Rutina",
        url: "/routines",
        icon: faFileLines,
        component: <SubMenu />,
    },
    {
        title: "Productos",
        url: "/products",
        icon: faStar,
        component: <SubMenu />,
    },
];

const Menu = () => {
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (
        e: React.MouseEvent<HTMLAnchorElement>,
        title: string
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: rect.right + 10, y: rect.top + rect.height / 2 });
        setHoveredItem(title);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const isSelected = (url: string) => {
        return pathname === url;
    };

    const getLinkClass = (url: string) => {
        return isSelected(url) ? "bg-[#484848]" : "bg-becurlyBlack";
    };

    const borderClass = (url: string) => {
        return isSelected(url)
            ? "bg-gradient-to-b from-gray-200/50 via-gray-200/30 to-transparent"
            : "bg-becurlyBlack";
    };

    return (
        <div className="w-[80px] h-full flex flex-col items-center text-white pt-2 relative  drop-shadow-xl">
            <Link
                href="/"
                className="flex flex-col items-center justify-center mb-6">
                <Image
                    src="/shortLogoWhite.svg"
                    alt="logo"
                    width={150}
                    height={150}
                    priority
                />
            </Link>
            <nav className="flex flex-col justify-center items-center gap-10 mt-8">
                {menuOptions.map((option) => (
                    <Link
                        key={option.title}
                        href={option.url}
                        className="w-full text-lg hover:text-pink-300 hover:scale-120 transition duration-150 ease-in-out"
                        onMouseEnter={(e) => handleMouseEnter(e, option.title)}
                        onMouseLeave={handleMouseLeave}>
                        <div
                            className={`rounded-md p-px ${borderClass(
                                option.url
                            )}`}>
                            <div
                                className={` flex p-3 justify-center items-center cursor-pointer rounded-md ${getLinkClass(
                                    option.url
                                )}`}>
                                <FontAwesomeIcon icon={option.icon} size="xl" />
                            </div>
                        </div>
                    </Link>
                ))}
            </nav>
            <HoverModal
                visible={hoveredItem !== null}
                title={hoveredItem || ""}
                position={position}
            />
        </div>
    );
};

export default Menu;
