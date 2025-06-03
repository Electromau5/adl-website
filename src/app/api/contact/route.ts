import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();

  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        company,
        message,
      },
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.error('API Error:', error); // 👈 Add this to debug in terminal
    return NextResponse.json({ success: false, error: 'Failed to save contact' }, { status: 500 });
  }
}
