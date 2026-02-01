"use server";

import { revalidatePath } from "next/cache";
import { contactSchema } from "@/lib/validations/contactSchema";
import { createContact } from "@/lib/email/createContact";

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function createContactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsedData = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsedData.success) {
    return { error: "Invalid form data" };
  }

  try {
    await createContact(parsedData.data);
    revalidatePath("/contact");

    return { success: true };
  } catch (error) {
    return { error: "Failed to send message. Please try again." };
  }
}
