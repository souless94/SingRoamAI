'use server';


import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export async function createTrip(formData: FormData) {
  const data = {
    title: formData.get('title') as string,
    location: formData.get('location') as string,
    startDate: new Date(formData.get('startDate') as string),
    endDate: new Date(formData.get('endDate') as string),
  };

  await prisma.trip.create({ data });
  redirect('/trips');
}

