// pages/index.js
import React from 'react';
import Head from 'next/head';
import Jumbo from '../components/Jumbo';

import { Clock, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Macelleria Paiano | Home</title>
        <meta name="description" content="Scopri i migliori prodotti di carne presso la Macelleria Paiano." />
      </Head>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="h-96 bg-gray-900 place-items-center grid">
          <div className="container mx-auto flex justify-between  banner-content">
            <div className="text-white w-1/2 flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-4">Macelleria Paiano</h1>
              <p className="text-xl mb-8">Dal 1980 portiamo sulla vostra tavola carni selezionate di prima qualità</p>
              <div className="button-box">
                <button className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Scopri i Nostri Prodotti
                </button>
              </div>
            </div>
            <Jumbo></Jumbo>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-lg flex flex-col items-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Orari di Apertura</h3>
                <p>Lun-Sab: 8:00-13:00, 16:30-20:00<br />Dom: Chiuso</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg flex flex-col items-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contattaci</h3>
                <p>Tel: 0836 428863<br />Email: info@macelleriapaiano.it</p>
              </div>

              <div className="text-center p-6 bg-red-50 rounded-lg flex flex-col items-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dove Siamo</h3>
                <p>Via Jan Palach, 18<br />73024 Maglie (LE)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">I Nostri Prodotti</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {["Carni Rosse", "Pollame", "Preparati Pronti", "Salumi"].map((category) => (
                <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Immagine</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    <button className="text-red-800 hover:text-red-700">
                      Scopri di più →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
