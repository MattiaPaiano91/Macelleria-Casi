"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiKnifeLine } from "react-icons/ri";

const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <header
            className={`pt-8 absolute top-0 w-full z-50 ${
                pathname === "/" ? "text-white" : "text-black"
            } `}
        >
            <nav className="container mx-auto flex justify-end items-center h-full px-4">
                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-4 text-sm font-medium">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-red-600 transition-colors"
                        >
                            Home
                        </Link>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <RiKnifeLine
                                className={`text-xl -rotate-45 transition-transform duration-300 ${
                                    pathname === "/" ? "" : "translate-x-14"
                                } `}
                            />
                        </div>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className="hover:text-red-600 transition-colors"
                        >
                            IL Team
                        </Link>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <RiKnifeLine
                                className={`text-xl -rotate-45 transition-transform duration-300 ${
                                    pathname === "/about"
                                        ? ""
                                        : "translate-x-14"
                                } `}
                            />
                        </div>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-red-600 transition-colors"
                        >
                            Contattaci
                        </Link>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <RiKnifeLine
                                className={`text-xl -rotate-45 transition-transform duration-300 ${
                                    pathname === "/contact"
                                        ? ""
                                        : "translate-x-14"
                                } `}
                            />
                        </div>
                    </li>
                </ul>

                {/* Toggle Menu Mobile con CSS */}
                <input
                    type="checkbox"
                    id="menu-toggle"
                    className="hidden peer"
                />
                <label
                    htmlFor="menu-toggle"
                    className="md:hidden cursor-pointer block p-2"
                >
                    ☰
                </label>

                <div className="hidden peer-checked:flex flex-col absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                    <Link
                        href="/"
                        className="py-2 px-4 border-b text-gray-800 hover:text-red-600"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="py-2 px-4 border-b text-gray-800 hover:text-red-600"
                    >
                        IL Team
                    </Link>
                    <Link
                        href="/contact"
                        className="py-2 px-4 text-gray-800 hover:text-red-600"
                    >
                        Contattaci
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
