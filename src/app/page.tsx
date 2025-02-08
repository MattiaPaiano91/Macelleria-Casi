import React from "react";
import Head from "next/head";
import Link from "next/link";

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
        <section className="bg-gray-900 p-6 sm:p-8 md:p-12 banner-content w-full">
          <div className="container mx-auto flex justify-center items-center">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:w-3/4 xl:w-2/3 text-center text-white py-8 sm:py-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Macelleria Paiano
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                Dal 1980 portiamo sulla vostra tavola carni selezionate di prima
                qualità
              </p>
              <div className="button-box">
                <a href="#products">
                  <button className="bg-red-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm md:text-base">
                    Scopri i Nostri Prodotti
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="infinite-carousel-container">
            <div className="infinite-carousel">
              <div className="carousel-track">
                <h1>
                  <span>Ciao e benvenuti! Stella</span>
                </h1>
                <h1>
                  <span>Ciao e benvenuti! Stella</span>
                </h1>
                <h1>
                  <span>Ciao e benvenuti! Stella</span>
                </h1>
                <h1>
                  <span>Ciao e benvenuti! Stella</span>
                </h1>
              </div>
            </div>
            ;
            <div className="infinite-carousel-container">
              {/* Seconda riga - va verso destra */}
              <div className="infinite-carousel">
                <div className="carousel-track reverse">
                  <h1>
                    <span>Ciao e benvenuti stella</span>
                  </h1>
                  <h1>
                    <span>Ciao e benvenuti stella</span>
                  </h1>
                  <h1>
                    <span>Ciao e benvenuti stella</span>
                  </h1>
                  <h1>
                    <span>Ciao e benvenuti stella</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section className="parallax-section">
          <div className="parallax"></div>
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
                  href={{ pathname: "/catalog", query: { category: category } }}
                  key={category}
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
                      Scopri di più <span className="arrow">→</span>
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
