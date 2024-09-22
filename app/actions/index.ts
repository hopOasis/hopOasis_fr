"use server";

import { revalidatePath } from "next/cache";

export async function revalidate() {
  revalidatePath("/", "page");
}

export async function revalidateCheckout() {
  revalidatePath("/checkout", "page");
}

export async function revalidateProductPage(id:string) {
  revalidatePath(`/shop/${id}`, "page");
}

