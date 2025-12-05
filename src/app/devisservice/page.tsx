"use client";

import { useState, useEffect } from "react";

//deploy vercel test
// Définition du type du formulaire
interface FormData {
  nom: string;
  email: string;
  phone: string;
  subject: string;
  date: string;
  lieu: string;
  invites: string;
  items: string[];
  message: string;
}

export default function DevisPage() {
  const [formData, setFormData] = useState<FormData>({
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

  const [emailjs, setEmailjs] = useState<any>(null);

  // Import dynamique de emailjs côté client uniquement
  useEffect(() => {
    import("emailjs-com").then((mod) => setEmailjs(mod));
  }, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailjs) return; // sécurité si emailjs n'est pas encore chargé

    emailjs
      .send(
        "service_nv3htf6",        // Service ID
        "template_4goqrub",       // Template ID
        {
          type: "devis_service",
          nom: formData.nom,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          date: formData.date,
          lieu: formData.lieu,
          invites: formData.invites,
          items: formData.items.join(", "),
          message: formData.message,
        },
        "C_AUJ_AaUA_VQjseU"       // Public Key
      )
      .then(
        () => {
          alert("Votre demande de devis a été envoyée !");
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
        },
        (error: any) => {
          console.error("Erreur :", error);
          alert("Une erreur est survenue, merci de réessayer.");
        }
      );
  };

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl heading-body mb-8">Demander un devis</h1>
        <p className="text-lg font-sans text-[var(--color-foreground)] mb-12">
          Remplissez ce formulaire pour recevoir une proposition personnalisée
          adaptée à votre événement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-sage-light)] p-8 rounded-lg shadow-md space-y-6"
        >
          {/* Infos personnelles */}
          <div>
            <label className="block mb-2 font-semibold">Nom complet</label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => handleChange("nom", e.target.value)}
              placeholder="Ex: Marie Dupont"
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Ex: marie.dupont@email.com"
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Téléphone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Ex: +33 6 12 34 56 78"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Sujet</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="Ex: Demande de devis service"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Infos événement */}
          <div>
            <label className="block mb-2 font-semibold">Date de l’événement</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Lieu</label>
            <input
              type="text"
              value={formData.lieu}
              onChange={(e) => handleChange("lieu", e.target.value)}
              placeholder="Ex: Château de Versailles"
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Nombre d’invités</label>
            <input
              type="number"
              value={formData.invites}
              onChange={(e) => handleChange("invites", e.target.value)}
              placeholder="Ex: 120"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Éléments souhaités */}
          <div>
            <label className="block mb-2 font-semibold">Éléments ou services souhaités</label>
            <textarea
              value={formData.items.join(", ")}
              onChange={(e) =>
                setFormData({ ...formData, items: e.target.value.split(",") })
              }
              placeholder="Ex: Arche florale, guirlandes lumineuses, coordination jour J"
              rows={3}
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Message personnalisé */}
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              placeholder="Décrivez vos envies, votre style ou vos besoins particuliers..."
              className="w-full border rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-[var(--color-sage-deep)] text-white rounded-md hover:bg-[var(--color-sage-dark)] transition font-semibold"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
