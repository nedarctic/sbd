import { createAdminClient } from "@/lib/supabase/admin";

type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function storeContact(data: ContactInput) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("contacts")
    .insert([data]);

  if (error) {
    throw new Error(error.message);
  }
}