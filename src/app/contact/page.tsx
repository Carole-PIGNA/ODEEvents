"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    subject: "",
    date: "",
    lieu: "",
    invites: "",
    items: [],
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nv3htf6",       // Service ID
        "template_4goqrub",      // Template universel
        {
          type: "contact",                         // Identifie le formulaire
          nom: formData.nom || "",
          email: formData.email || "",
          phone: formData.phone || "",
          subject: formData.subject || "",
          date: formData.date || "",              // vide mais requis par le template
          lieu: formData.lieu || "",
          invites: formData.invites || "",
          items: formData.items.join(", ") || "",
          message: formData.message || "",
        },
        "C_AUJ_AaUA_VQjseU"       // Public Key
      )
      .then(
        () => {
          alert("Merci pour votre message 💌 Nous vous répondrons rapidement !");
          setFormData({
            nom: "",
            email: "",
            phone: "",
            subject: "",
            date: "",
            lieu: "",
            invites: "",
            items: [],
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Erreur :", error);
          alert("Une erreur est survenue, merci de réessayer.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Bloc gauche : infos de contact */}
        <div className="space-y-6 text-left">
          <h1 className="text-4xl heading-body mb-6">Contact</h1>
          <p className="text-lg font-sans text-[var(--color-foreground)] mb-8">
            Une question, une envie, un projet ? Écrivez-nous ou appelez-nous,
            nous serons ravis de vous accompagner.
          </p>

          <div className="bg-[var(--color-sage-light)] p-6 rounded-lg shadow-md space-y-4">
            <p><strong>Email :</strong> samousa17@gmail.com</p>
            <p><strong>Téléphone :</strong> +33 6 13 81 95 26</p>
            <p><strong>Adresse :</strong> Nancy, France</p>
            <p><strong>Horaires :</strong> Lun–Ven 9h–18h</p>
          </div>
        </div>

        {/* Bloc droit : formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-sage-light)] rounded-tl-[2rem] rounded-br-[2rem] shadow-lg p-8 space-y-6 text-left"
        >
          <div>
            <label htmlFor="nom" className="block text-sm font-semibold mb-2">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: +33 6 12 34 56 78"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex: Demande de devis, question sur la décoration..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-sage-deep)] text-white font-semibold py-3 rounded-md hover:bg-[var(--color-sage-dark)] transition disabled:opacity-50"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
