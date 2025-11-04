import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("Received email request");

  try {
    const { name, phoneNo } = await req.json(); // ✅ Accepting PDF URL instead of base64
    

    const response = await resend.emails.send({
      from: 'support@lonnue.com',
      to: 'karishma@lonnue.com',
      subject: 'SubMission from lonnue.com',
      html: `
        <h1>New Submission Received</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phoneNo}</p>
      `,
    });

    console.log("Email sent successfully:", response);
    return Response.json({ success: true, response });
  } catch (error) {
    console.error("Email error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return Response.json({ success: false, error: errorMessage });
  }
}
