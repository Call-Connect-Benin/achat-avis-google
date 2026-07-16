import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";

const prisma = new PrismaClient();
const secret = new TextEncoder().encode(
  "change-me-in-production-please-use-a-long-random-string",
);

const stamp = Date.now();
const email = `test-e2e-${stamp}@example.com`;
const token = `e2e-${stamp}`;

const user = await prisma.user.create({
  data: { name: "Test E2E", email, passwordHash: "x" },
});
const business = await prisma.business.create({
  data: {
    name: "Plomberie Test E2E",
    platform: "Google",
    reviewUrl: "https://search.google.com/local/writepanel?placeid=ABC123",
    userId: user.id,
  },
});
const link = await prisma.reviewLink.create({
  data: { token, businessId: business.id },
});

const session = await new SignJWT({
  userId: user.id,
  email: user.email,
  name: user.name,
})
  .setProtectedHeader({ alg: "HS256" })
  .setIssuedAt()
  .setExpirationTime("7d")
  .sign(secret);

console.log(
  JSON.stringify(
    {
      userId: user.id,
      businessId: business.id,
      token: link.token,
      session,
      publicUrl: `http://localhost:3000/avis/${link.token}`,
    },
    null,
    2,
  ),
);

await prisma.$disconnect();
