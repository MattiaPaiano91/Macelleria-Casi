// pages/contact.tsx
import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contatti | Macelleria Paiano</title>
        <meta name="description" content="Contatta la Macelleria Paiano per informazioni sui nostri prodotti e servizi." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contatti</h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Benvenuti alla Macelleria Paiano! Per qualsiasi informazione, non esitate a contattarci.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informazioni di Contatto */}
          <div className="space-y-8">
            {/* ... resto del codice delle informazioni di contatto ... */}
          </div>

          {/* Form di Contatto */}
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default ContactPage;