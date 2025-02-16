import React from "react";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const ContactPage: React.FC = () => {
    return (
      <>
        <Head>
          <title>Contatti | Macelleria Paiano</title>
          <meta
            name="description"
            content="Contatta la Macelleria Paiano per informazioni sui nostri prodotti e servizi."
          />
        </Head>

        <div className="container mx-auto px-4 py-36">
          <h1 className="text-4xl font-bold text-center mb-8 heroFont">
            Contatti
          </h1>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Benvenuti alla Macelleria Paiano! Per qualsiasi informazione, non
            esitate a contattarci.
          </p>
          {/* Form di Contatto */}
          <ContactForm />
        </div>
        <Footer />
      </>
    );
};

export default ContactPage;
