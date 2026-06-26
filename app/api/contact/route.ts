import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Destination email — swap to client's address before launch
const TO_EMAIL = "isaaclowtdoc@gmail.com";
const FROM_EMAIL = "bookings@send.apexflowservices.com";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, phone, email, vehicle, service, date, time, notes } = body;

  if (!name || !phone || !email || !vehicle || !service || !date) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `New Booking Request — ${service}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Vehicle: ${vehicle}`,
      `Service: ${service}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time ?? "Not specified"}`,
      `Notes: ${notes ?? "None"}`,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
