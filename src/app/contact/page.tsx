"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux brancher ton API ou service d’envoi d’email
    console.log("Formulaire envoyé :", formData);
    alert("Merci pour votre message 💌 Nous vous répondrons rapidement !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl heading-body mb-6">Contact</h1>
        <p className="text-lg font-sans text-[var(--color-foreground)] mb-12">
          Une question, une envie, un projet ? Écrivez-nous, nous serons ravis de vous accompagner.
        </p>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-sage-light)] rounded-tl-[2rem] rounded-br-[2rem] shadow-lg p-8 space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
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
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
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
            className="w-full bg-[var(--color-sage-deep)] text-white font-semibold py-3 rounded-md hover:bg-[var(--color-sage-dark)] transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
