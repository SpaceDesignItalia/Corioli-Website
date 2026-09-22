import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Accesso riservato a Corioli.",
  // Senza questo eredita dal layout radice il canonical verso la home:
  // noindex più canonical verso un'altra pagina sono due segnali opposti.
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
