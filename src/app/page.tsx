import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/components/HeroImg";

export default function HomePage() {
    const categories = ["Carni Rosse", "Pollame", "Preparati Pronti", "Salumi"];
    const slug_categories = categories.map((category) =>
        category.replace(" ", "_")
    );

    return (
        <>
            <Head>
                <title>Macelleria Paiano | Home</title>
                <meta
                    name="description"
                    content="Scopri i migliori prodotti di carne presso la Macelleria Paiano."
                />
            </Head>

            <div className="min-h-screen w-full">
                {/* Hero Section */}
                <section className="bg-gray-900 banner-content w-full pt-[12rem] overflow-hidden">
                    <div className="container h-full mx-auto flex justify-center items-center">
                        <div className="w-full h-full  lg:w-3/4 xl:w-2/3 text-center text-white flex flex-col">
                            <div className="h-auto px-4 sm:px-6 md:px-8 mb-56">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 heroFont">
                                    Macelleria Casi
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                                    Dal 1980 portiamo sulla vostra tavola carni
                                    selezionate di prima qualità
                                </p>
                            </div>

                            <HeroImg />
                        </div>
                    </div>
                </section>

                {/* Products Preview */}
                <section id="products" className="py-12 sm:py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
                            I Nostri Prodotti
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {slug_categories.map((category) => (
                                <Link
                                    //Passo il nome della categoria direttamente nel path url, ho aggiunto le rotte dinamiche
                                    href={{ pathname: `/${category}` }}
                                    key={category}
                                    prefetch={false}
                                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105"
                                >
                                    <div className="h-36 sm:h-48 bg-gray-200 product">
                                        <img
                                            src={`/${category}.webp`}
                                            alt={category}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <h3 className="text-base sm:text-xl font-semibold mb-2">
                                            {category.replace("_", " ")}
                                        </h3>
                                        <button className="text-red-800 hover:text-red-700 text-sm sm:text-base button">
                                            Scopri di più{" "}
                                            <span className="arrow">→</span>
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
