"use client";

import Link from "next/link";
import Image from "next/image";
import HoverModal from "./HoverModal";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";

const menuOptions = [
    {
        title: "Home",
        url: "/home",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
            </svg>
        ),
        component: <SubMenu />,
    },
    {
        title: "Tutoriales",
        url: "/guides",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
            </svg>
        ),
        component: <SubMenu />,
    },
    {
        title: "Rutina",
        url: "/routines",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99"
                />
            </svg>
        ),
        component: <SubMenu />,
    },
    {
        title: "Productos",
        url: "/products",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
            </svg>
        ),
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
                                {option.icon}
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
