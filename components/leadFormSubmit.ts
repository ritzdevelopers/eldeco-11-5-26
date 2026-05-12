import type { FormEvent } from "react";

const GOOGLE_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwmyV0vWMVp31JQZU8rYaa5WUIb-YRifqoPH76FzebgTmxuzSCfuibN-9O40-ogRy7-tA/exec";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

function getCurrentDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return {
    date: `${day}-${month}-${year}`,
    time: `${formattedHours}:${minutes} ${period}`,
  };
}

function normalizeIndianPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }

  return digits;
}

function validateLeadFormData(formData: {
  name: string;
  email: string;
  phone: string;
}) {
  if (!formData.name) {
    throw new Error("Please enter your name.");
  }

  if (!formData.email) {
    throw new Error("Please enter your email.");
  }

  if (!EMAIL_REGEX.test(formData.email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (!formData.phone) {
    throw new Error("Please enter your phone number.");
  }

  if (!INDIAN_MOBILE_REGEX.test(formData.phone)) {
    throw new Error("Please enter a valid Indian mobile number.");
  }
}

export async function handleLeadFormSubmit(
  event: FormEvent<HTMLFormElement>,
) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const { date, time } = getCurrentDateTime();

  const formData = {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: normalizeIndianPhone(String(data.get("phone") ?? "").trim()),
    message: String(data.get("message") ?? "").trim(),
    date,
    time,
  };

  validateLeadFormData(formData);

  const response = await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  return response.json();
}
