import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Contacts</h1>
      {contacts.map((c) => (
        <div key={c.id} className="border-b py-4">
          <strong>{c.name}</strong> ({c.email}) — <em>{c.company}</em>
          <p>{c.message}</p>
          <small className="text-gray-600">{new Date(c.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
