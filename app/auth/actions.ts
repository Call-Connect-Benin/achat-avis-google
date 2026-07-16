"use server";

import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createSession, destroySession } from "@/lib/auth";

export type AuthState = { ok: boolean; message: string };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function register(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const consent = formData.get("consent") === "on";

  if (!name || !EMAIL_RE.test(email) || password.length < 8) {
    return {
      ok: false,
      message: "Nom, email valide et mot de passe de 8 caractères minimum.",
    };
  }

  if (!consent) {
    return {
      ok: false,
      message: "Veuillez accepter les conditions générales.",
    };
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { ok: false, message: "Un compte existe déjà pour cet email." };
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, passwordHash: hash, phone, company },
  });

  await createSession({ userId: user.id, email: user.email, name: user.name });
  redirect("/espace");
}

export async function login(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { ok: false, message: "Identifiants incorrects." };

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return { ok: false, message: "Identifiants incorrects." };

  await createSession({ userId: user.id, email: user.email, name: user.name });
  redirect("/espace");
}

export async function logout() {
  await destroySession();
  redirect("/connexion");
}
