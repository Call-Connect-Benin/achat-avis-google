import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function EspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/connexion");
  return <>{children}</>;
}
