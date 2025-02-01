import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CallToFb from '@/components/CallToFb';


import { Clock, Phone, MapPin } from 'lucide-react';

export default function HomePage() {

 const categories = ['Carni Rosse', 'Pollame', 'Preparati Pronti', 'Salumi'];

 const slug_categories = categories.map((category) => category.replace(' ', '_'));


  return (
    <>
      <Head>
        <title>Macelleria Paiano | Home</title>
        <meta name="description" content="Scopri i migliori prodotti di carne presso la Macelleria Paiano." />
      </Head>
      
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <section className=" bg-gray-900 p-12  banner-content  w-full ">
          <div className="container mx-auto flex justify-center relative h-full test">
              <div className="text-white text-center w-3/4 pt-12">
                <h1 className="text-6xl font-bold mb-4">Macelleria Paiano</h1>
                <p className="text-ò mb-8">Dal 1980 portiamo sulla vostra tavola carni selezionate di prima qualità</p>
                <div className="button-box">
                  <button  className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                    <a  href="#products">Scopri i Nostri Prodotti</a>
                  </button>
                </div>
              </div>
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
                <p>Lun-Sab: 7:00-13:00, 16:30-20:00<br />Gio: 7:00-13:00 Dom: Chiuso</p>
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

        <section className='parallax-section '>
          <div className='parallax'>
          
          </div>
        </section>

        {/* Products Preview */}
        <section id='products' className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">I Nostri Prodotti</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {slug_categories.map((category) => (  
                <Link href={{ pathname:'/catalog', query:{ category:category } }} key={category} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="h-48 bg-gray-200 product">
                    <img src={`/${category}.webp`} alt={category} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category.replace('_', ' ')}</h3>
                    <button className="text-red-800 hover:text-red-700 button">
                      Scopri di più <span className='arrow'>→</span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallToFb />
      </div>
    </>
  );
}
