"use client";

import type React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "QC3TOJ51Y_yZKboXU",
  blockHeadless: true,
  blockList: {
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    watchVariable: "paianomattia.dev@gmail.com",
  },
  limitRate: {
    id: "app",
    throttle: 10000,
  },
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    isError: boolean;
  }>({ show: false, message: "", isError: false });

  const showNotification = (message: string, isError: boolean) => {
    setNotification({ show: true, message, isError });
    // Nascondi la notifica dopo 5 secondi
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const regex = {
      nome: /^[a-zA-Z\s]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      telefono: /^\d{10,15}$/,
      messaggio: /.+/
    }

    const formData = new FormData(event.currentTarget);
    const templateParams: { [key: string]: FormDataEntryValue | null } = {
      nome: formData.get("name"),
      email: formData.get("email"),
      telefono: formData.get("phone"),
      messaggio: formData.get("message"),
    };

    for (const key in templateParams) {
      if (!regex.hasOwnProperty(key)) {
        showNotification(
          "Errore nell'invio del messaggio. Riprova più tardi.",
          true
        );
      }
      for (const reg in regex) {
        if (!regex[reg as keyof typeof regex].test(templateParams[reg] as string)) {
          showNotification(`Errore nel campo: ${reg}, per favore controllare i dati inseriti.`, true);
          setIsSubmitting(false);
          return;
        }
      }
 
    }

    try {
      const response = await emailjs.send(
        "service_zuspr45",
        "template_hv4omjp",
        templateParams
      );

      if (response.status === 200) {
        showNotification("Messaggio inviato con successo!", false);
      
      }
    } catch (error) {
      showNotification(
        "Errore nell'invio del messaggio. Riprova più tardi.",
        true
      );
      console.error("FAILED...", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      {/* Notification */}
      <div
        className={`
          fixed top-4  left-4 md:left-auto md:w-96 p-4 rounded-lg shadow-lg
          transition-all duration-300 ease-in-out
          ${
            notification.show
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
          ${
            notification.isError
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }
        `}
        role="alert"
      >
        {notification.message}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-[600px] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Invia un Messaggio</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome e Cognome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telefono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Messaggio
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-800 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Invio in corso...
              </>
            ) : (
              "Invia Messaggio"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
