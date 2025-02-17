import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductCategoryCard: React.FC<{ category: string }> = ({ category }) => {
    return (
        <Link
            href={{ pathname: `/${category}` }}
            prefetch={false}
            className="overflow-hidden flex flex-col"
        >
            <div className="py-3 ">
                <h3 className="text-xl md:text-3xl font-semibold heroFont">
                    {category.replace("_", " ")}
                </h3>
            </div>
            <div className="h-36 sm:h-48 lg:h-60 xl:h-80 bg-gray-200 product">
                <Image
                    src={`/${category}.webp`}
                    alt={category}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="py-5 text-end">
                <button className="bg-[#9b111e] text-white text-xs sm:text-sm md:text-lg hover:opacity-80 transition-opacity duration-150 px-3 md:px-6 py-1 md:py-2 rounded-full">
                    Scopri di più{" "}
                    <MdOutlineKeyboardArrowRight className="inline-block text-xs sm:text-sm md:text-lg" />
                </button>
            </div>
        </Link>
    );
};

export default ProductCategoryCard;
