import { FonctionnalitesPage } from "@/components/sections/fonctionnalites-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Fonctionnalités d'agent vocal IA",
  description:
    "Toutes les fonctionnalités de notre agent vocal IA. Appels entrants, rendez-vous, qualification, intégrations CRM et conformité québécoise.",
  path: "/fonctionnalites",
});

export default function FonctionnalitesRoute() {
  return <FonctionnalitesPage />;
}
