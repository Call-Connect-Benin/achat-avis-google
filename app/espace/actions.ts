import { redirect } from "next/navigation";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function createBusiness(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/connexion");

  const name = String(formData.get("name") ?? "").trim();
  const platform = String(formData.get("platform") ?? "Google").trim();
  const reviewUrl = String(formData.get("reviewUrl") ?? "").trim();

  if (!name || !/^https?:\/\//.test(reviewUrl)) {
    redirect("/espace?error=invalid");
  }

  await prisma.business.create({
    data: { name, platform, reviewUrl, userId: session.userId },
  });
  redirect("/espace");
}

export async function createReviewLink(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/connexion");

  const businessId = String(formData.get("businessId") ?? "");
  const business = await prisma.business.findFirst({
    where: { id: businessId, userId: session.userId },
  });
  if (!business) redirect("/espace");

  const token = randomBytes(16).toString("hex");
  await prisma.reviewLink.create({ data: { token, businessId } });
  redirect(`/espace/entreprises/${businessId}`);
}
