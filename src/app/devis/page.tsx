"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const themes = {
  "boheme-chic": {
    title: "Bohème Chic",
    items: [
      "Arche florale bohème",
      "Guirlandes guinguette",
      "Vaisselle vintage dorée",
      "Chemins de table en lin naturel",
      "Lanternes en rotin",
    ],
    message:
      "Nous aimons beaucoup l’univers bohème chic. Nous souhaitons une ambiance naturelle et poétique, avec des matières brutes et des fleurs séchées.",
  },
  "elegance-classique": {
    title: "Élégance Classique",
    items: [
      "Service de table doré",
      "Bougeoirs en cristal",
      "Arche florale blanche",
      "Mobilier chic",
    ],
    message:
      "Nous souhaitons une ambiance raffinée et intemporelle, avec des tons ivoire et dorés.",
  },
  "jardin-romantique": {
    title: "Jardin Romantique",
    items: [
      "Tables fleuries",
      "Guirlandes lumineuses",
      "Vaisselle pastel",
      "Panneaux de bienvenue",
    ],
    message:
      "Nous aimons la fraîcheur et la douceur d’un jardin romantique, avec des verts tendres et des roses délicats.",
  },
};

// ✅ Sous-composant qui utilise useSearchParams
function DevisForm() {
  const searchParams = useSearchParams();
  const themeKey = searchParams.get("theme") || "boheme-chic";
  const theme = themes[themeKey as keyof typeof themes];

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    subject: "",
    date: "",
    lieu: "",
    invites: "",
    items: theme.items.map((item) => ({ name: item, checked: true })),
    message: theme.message,
  });

  const [emailjs, setEmailjs] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    import("emailjs-com").then((mod) => setEmailjs(mod));
  }, []);

  const handleChangeItem = (index: number) => {
    const newItems = [...formData.items];
    newItems[index].checked = !newItems[index].checked;
    setFormData({ ...formData, items: newItems });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!emailjs) {
      alert("Le service d'envoi n'est pas encore prêt, réessayez dans un instant.");
      setLoading(false);
      return;
    }

    const selectedItems = formData.items
      .filter((item) => item.checked)
      .map((item) => item.name);

    try {
      await emailjs.send(
        "service_nv3htf6",
        "template_4goqrub",
        {
          type: "devis_inspiration",
          theme: theme.title,
          nom: formData.nom,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          date: formData.date,
          lieu: formData.lieu,
          invites: formData.invites,
          items: selectedItems.join(", "),
          message: formData.message,
        },
        "C_AUJ_AaUA_VQjseU"
      );

      alert("Votre demande de devis a été envoyée !");
      setFormData({
        nom: "",
        email: "",
        phone: "",
        subject: "",
        date: "",
        lieu: "",
        invites: "",
        items: theme.items.map((item) => ({ name: item, checked: true })),
        message: theme.message,
      });
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue, merci de réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl heading-body mb-8">
          Demande de devis – {theme.title}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-sage-light)] p-8 rounded-lg shadow-md space-y-6"
        >
          {/* Champs du formulaire */}
          <div>
            <label className="block mb-2 font-semibold">Nom complet</label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Téléphone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Sujet</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Date de l’événement</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Lieu</label>
            <input
              type="text"
              value={formData.lieu}
              onChange={(e) => setFormData({ ...formData, lieu: e.target.value })}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Nombre d’invités</label>
            <input
              type="number"
              value={formData.invites}
              onChange={(e) => setFormData({ ...formData, invites: e.target.value })}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Éléments à louer</label>
            <div className="space-y-2">
              {formData.items.map((item, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleChangeItem(index)}
                  />
                  <span>{item.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full border rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[var(--color-sage-deep)] text-white rounded-md hover:bg-[var(--color-sage-dark)] transition font-semibold disabled:opacity-50"
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}

// ✅ Export avec Suspense wrapper
export default function Page() {
  return (
    <Suspense fallback={<div>Chargement du formulaire...</div>}>
      <DevisForm />
    </Suspense>
  );
}
