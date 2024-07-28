"use client";
import Link from "next/link";
import Logo from "../../icons/logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "about", path: "/twitch/about" },
    { label: "stream", path: "/twitch/stream" },
    { label: "watch", path: "/twitch/watch" },
    { label: "company", path: "/twitch/company" },
    { label: "blog", path: "/twitch/blog" },
];

export const Header = () => {
    const pathName = usePathname();
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <header className="bg-[#9146FF] px-10 py-4 md:py-10 lg:p-8 lg:px-32">
            <nav className="w-full flex justify-between md:justify-between items-center gap-4 lg:mx-2 md:mx-auto">
                <div className="w-28 h-20 flex items-center justify-center">
                    <Logo.Twitch className="w-full h-full" />
                </div>
                <ul className="hidden md:hidden lg:flex w-9/12 justify-center gap-12 mx-10 text-xl font-semibold text-white">
                    {navLinks.map(({ label, path }) => (
                        <li key={label}>
                            <Link
                                href={path}
                                className={cn(
                                    "relative text-xl w-fit capitalize block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:ease-in-out after:duration-500 after:origin-left",
                                    pathName === path
                                        ? "text-black after:bg-black after:hover:bg-white hover:text-white"
                                        : "text-white hover:text-black after:hover:bg-black after:bg-white"
                                )}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:hidden lg:block text-white font-semibold text-xl">
                    twitch.tv
                </div>
                <div>
                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(!isOpen)}
                    >
                        {isOpen ? <X color="white" /> : <Menu color="white" />}
                    </button>{" "}
                </div>
            </nav>
        </header>
    );
};