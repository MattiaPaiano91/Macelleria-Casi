import React from 'react';
import { SiMessenger } from 'react-icons/si'; // Icona da Simple Icons

const FacebookCTA: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">Contattaci su Facebook</h2>
          <p className="text-lg">
            Ordina i tuoi prodotti preferiti o invia un messaggio per qualsiasi informazione.
          </p>
        </div>
        <a
          href="https://www.facebook.com/messages/t/100007860905725" // URL della pagina Facebook
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          <SiMessenger className="w-6 h-6" />
          Scrivici su Messenger
        </a>
      </div>
    </section>
  );
};

export default FacebookCTA;
