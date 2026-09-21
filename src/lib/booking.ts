const PUBLIC_KEY = "KcAV_V0r3-mDR5UjE";
const SERVICE_ID = "service_gzb3onh";
const TEMPLATE_ID = "template_v3ml94b";

function getVal(id: string): string {
  const el =
    (document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) ||
    (document.querySelector(`[name="${id}"]`) as HTMLInputElement | null);
  return el && el.value.trim() !== "" ? el.value.trim() : "-";
}

function formatWhatsapp(rawPhone: string): string {
  if (rawPhone === "-") return rawPhone;
  let cleanNumber = rawPhone.replace(/\D/g, "");
  if (cleanNumber.startsWith("01") && cleanNumber.length === 11) {
    cleanNumber = "2" + cleanNumber;
  }
  return cleanNumber;
}

export async function sendBooking(): Promise<void> {
  const emailjs = (await import("@emailjs/browser")).default;
  emailjs.init(PUBLIC_KEY);

  const rawPhone = getVal("user_phone");
  const templateParams = {
    user_name: getVal("user_name"),
    user_location: getVal("user_location"),
    user_phone: rawPhone,
    user_whatsapp: formatWhatsapp(rawPhone),
    service_type: getVal("service_type"),
    session_date: getVal("session_date"),
    session_time: getVal("session_time"),
    user_email: getVal("user_email"),
    user_budget: getVal("user_budget"),
    lead_source: getVal("lead_source"),
    user_notes: getVal("user_notes"),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
