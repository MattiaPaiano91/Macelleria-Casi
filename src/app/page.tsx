import React from "react";
import Head from "next/head";
import ProductCategoryCard from "@/components/ProductCategoryCard";

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
                <section
                    className="banner-content w-full pt-[12rem] overflow-hidden relative bg-gray-900"
                    style={{
                        backgroundImage: `url(/AdobeStock_359865519.webp)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black"
                        style={{ opacity: 0.8 }}
                    ></div>
                    <div className=" h-full mx-auto flex justify-start items-center relative z-10 px-16">
                        <div className="h-auto px-4 sm:px-6 md:px-8 mb-56 text-start text-white">
                            <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold mb-4 heroFont">
                                Macelleria Casi
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                                Dal 1980 portiamo sulla vostra tavola carni
                                selezionate di prima qualità
                            </p>
                            <p className="text-xs md:text-sm mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. <br /> Officia in itaque ex
                                modi commodi explicabo at quis est quibusdam
                                iure exercitationem velit,
                                <br /> reiciendis quas esse neque molestiae
                                tempora voluptatibus amet.
                            </p>
                            <a
                                href="#products"
                                className="py-2 px-4 bg-[#9b111e] text-white rounded-full"
                            >
                                Guarda i nostri prodotti
                            </a>
                        </div>
                    </div>
                </section>

                {/* Products Preview */}
                <section
                    id="products"
                    className="py-12 sm:py-16 md:py-32 bg-gray-50 min-h-screen"
                >
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-32 heroFont">
                            I Nostri Prodotti
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {slug_categories.map((category, idx) => (
                                <ProductCategoryCard
                                    key={idx}
                                    category={category}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
