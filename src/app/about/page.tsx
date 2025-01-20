// pages/about.js
'use client';

import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Chi Siamo | Macelleria Paiano</title>
        <meta name="description" content="Scopri la storia e la tradizione della Macelleria Paiano." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Chi Siamo</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-cover bg-center"></div>
            
            <div className="p-8">
              <p className="text-lg mb-6 leading-relaxed">
                La Macelleria Paiano è una realtà storica con oltre 50 anni di esperienza nel settore della macelleria di qualità. 
                La nostra storia è fatta di passione, dedizione e profonda conoscenza delle carni.
              </p>

              <p className="text-lg mb-6 leading-relaxed">
                Da generazioni, la nostra famiglia seleziona con cura i migliori fornitori e alleva direttamente parte del bestiame, 
                garantendo così la massima qualità e tracciabilità dei nostri prodotti.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">La Nostra Missione</h2>
                  <p className="text-gray-700">
                    Portare sulle tavole dei nostri clienti solo carni di prima scelta, 
                    mantenendo viva la tradizione della macelleria artigianale e garantendo 
                    sempre la massima qualità e sicurezza alimentare.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">I Nostri Valori</h2>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Qualità senza compromessi</li>
                    <li>• Rispetto per la tradizione</li>
                    <li>• Tracciabilità garantita</li>
                    <li>• Servizio personalizzato</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-6 bg-red-50 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">La Nostra Esperienza</h2>
                <p className="text-gray-700">
                  Con mezzo secolo di esperienza nel settore, abbiamo perfezionato l&apos;arte 
                  della macelleria, combinando tecniche tradizionali con moderne pratiche 
                  di conservazione e preparazione delle carni. Il nostro team di esperti 
                  macellai è sempre pronto a consigliarvi il taglio migliore per ogni 
                  vostra esigenza.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}